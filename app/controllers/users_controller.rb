class UsersController < ApplicationController
  def show
    @user = current_user
    @booked_offers = current_user.bookings
    @offers = current_user.offers
    @bookings_by_other_user = Booking.where(offer: @offers)
    @archive = Booking.where(@booked_offers.play_time > Time.now)
  end

  def new
    @user = User.new
  end

  def edit
    @user = User.find(params[:id])
  end



end
