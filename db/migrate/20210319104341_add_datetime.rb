class AddDatetime < ActiveRecord::Migration[6.0]
  def change
    add_column :offers, :datetime, :datetime
  end
end
