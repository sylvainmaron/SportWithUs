class BookingsController < ApplicationController
  
  def new
    @bookings = Booking.new
  end

  def create
    @booking = Booking.new(booking_params)
    @offer = Offer.find(params[:offer_id])
    @booking.user = current_user
    @booking.offer = @offer
    if @booking.save
      redirect_to offer_path(@offer)
    else
      render :new
    end
  end

  private

  def booking_params
    params.require(:booking).permit(:status)
  end
end
