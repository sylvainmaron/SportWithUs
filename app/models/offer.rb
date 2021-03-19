class Offer < ApplicationRecord
  has_many :bookings, dependent: :destroy
  belongs_to :user
  belongs_to :chatroom, dependent: :destroy
end
