class UsersController < ApplicationController
  def show
    @user = current_user
    @booked_offers = current_user.bookings
    @offers = current_user.offers
    @bookings_by_other_user = Booking.where(offer: @offers)
  end
end
