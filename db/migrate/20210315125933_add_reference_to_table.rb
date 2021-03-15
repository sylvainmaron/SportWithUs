class AddReferenceToTable < ActiveRecord::Migration[6.0]
  def change
    add_reference :bookings, :offers, foreign_key: true
    add_column :users, :nickname, :string
    add_column :users, :sport, :string
    add_column :users, :age, :integer
  end
end
