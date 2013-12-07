class AddSystemToPlanetsAndStars < ActiveRecord::Migration
  def change
  	add_column :stars, :system_id, :integer
  	add_column :planets, :system_id, :integer
  end
end
