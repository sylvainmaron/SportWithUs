class BookingsController < ApplicationController
  def new
    @bookings = Booking.new
  end

  def index
    @booking = Booking.all
  end

  def create
    @booking = Booking.new(status: :play)
    @offer = Offer.find(params[:offer_id])
    @booking.offer_id = @offer.id
    @booking.user = current_user

    
    if @booking.save
      redirect_to offer_path(@offer)
    else
      render offers_path
    end
  end
end
