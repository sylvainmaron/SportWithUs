class CreateOffers < ActiveRecord::Migration[6.0]
  def change
    create_table :offers do |t|
      t.string :title
      t.date :time
      t.integer :min_players

      t.timestamps
    end
  end
end
