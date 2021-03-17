class BookingsController < ApplicationController
  def create
    @booking = Booking.new(status: :play)
    @offer = Offer.find(params[:offer_id])
    @booking.offer = @offer
    @booking.user = current_user

    if @booking.save
      redirect_to offer_path(@offer)
    else
      render offers_path
    end
  end
end
