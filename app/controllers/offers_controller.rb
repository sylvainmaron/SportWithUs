class OffersController < ApplicationController
  def index
    @offers = Offer.all
  end

  def create
    @offer = Offer.new(offer_params)

    @offer.user = current_user
    @chatroom = Chatroom.create(name: "chatroom ##{@offer.title}")
    @offer.chatroom = @chatroom
    if @offer.save
      redirect_to offers_path
    else
      render :new
    end
  end

  def new
    @offer = Offer.new
  end

  def show
    @offer = Offer.find(params[:id])
    @booking = Booking.new
    @bookings = Booking.find_by(id: @offer)
  end

  private

  def offer_params
    params.require(:offer).permit(:title, :play_time, :min_players)
  end
end
