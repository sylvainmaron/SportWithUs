class BookingsController < ApplicationController
  before_action :set_offer, only: %i[show create]

  def create
    @booking = Booking.new(status: :play)

    @booking.offer = @offer
    @booking.user = current_user

    if @booking.save
      redirect_to offer_path(@offer)
    else
      render offers_path
    end
  end

  private

  def set_offer
    @offer = Offer.find(params[:offer_id])
  end
end
