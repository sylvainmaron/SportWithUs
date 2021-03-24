class OffersController < ApplicationController
  def index
    @offers = Offer.all
    @img = [
      "https://images.pexels.com/photos/5836965/pexels-photo-5836965.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.pexels.com/photos/4789457/pexels-photo-4789457.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.pexels.com/photos/6077806/pexels-photo-6077806.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.pexels.com/photos/6078297/pexels-photo-6078297.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.pexels.com/photos/4785491/pexels-photo-4785491.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.pexels.com/photos/6507965/pexels-photo-6507965.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.pexels.com/photos/1311619/pexels-photo-1311619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.pexels.com/photos/5553079/pexels-photo-5553079.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.pexels.com/photos/6077790/pexels-photo-6077790.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.pexels.com/photos/264384/pexels-photo-264384.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.pexels.com/photos/3041176/pexels-photo-3041176.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.pexels.com/photos/4785494/pexels-photo-4785494.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    ]
  end

  def create
    @offer = Offer.new(offer_params)

    @offer.user = current_user
    @chatroom = Chatroom.create(name: @offer.title.to_s)
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
