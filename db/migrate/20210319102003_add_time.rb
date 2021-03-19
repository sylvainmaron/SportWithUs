class AddTime < ActiveRecord::Migration[6.0]
  def change
    add_column :offers, :time, :time
  end
end
