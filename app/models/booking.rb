class Booking < ApplicationRecord
  belongs_to :user
  belongs_to :offer

  def is_coming?
    offer.play_time > Date.today
  end
end
