class ChangeRefs < ActiveRecord::Migration[6.0]
  def change
    remove_column :chatrooms, :offer_id
    add_reference :offers, :chatroom, foreign_key: true
  end
end
