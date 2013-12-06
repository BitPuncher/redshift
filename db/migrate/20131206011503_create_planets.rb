class CreatePlanets < ActiveRecord::Migration
  def change
    create_table :planets do |t|
    	t.string :name, :null => false
    	t.integer :diameter, :null => false
    	t.integer :radius, :null => false
    	t.integer :orbit_duration
      t.integer :current_orbit
      t.string :orbit_type, :null => false, :default => "circle"

      t.timestamps
    end

    add_index :planets, :name
  end
end
