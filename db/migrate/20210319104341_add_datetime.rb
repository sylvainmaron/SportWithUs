class AddDatetime < ActiveRecord::Migration[6.0]
  def change
    add_column :offers, :play_time, :datetime
  end
end
