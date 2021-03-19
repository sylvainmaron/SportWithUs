class RemoveTime < ActiveRecord::Migration[6.0]
  def change
    remove_column :offers, :time
  end
end
