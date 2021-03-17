class ChangeReferences < ActiveRecord::Migration[6.0]
  def change
    remove_column :bookings, :offers_id
    add_reference :bookings, :offer, foreign_key: true
  end
end
