class User < ApplicationRecord
  has_many :bookings
  has_many :offers
  has_one_attached :photo

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  # validates :nickname, :age, :description, presence: true

  def booking_coming_count
    coming_bookings = bookings.filter do |booking|
      booking.is_coming?
    end
    coming_bookings.length
  end
end
