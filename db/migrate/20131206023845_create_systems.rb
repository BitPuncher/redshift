class CreateSystems < ActiveRecord::Migration
  def change
    create_table :systems do |t|
    	t.string :name, :null => false
      t.integer :diameter, :null => false
    	t.integer :radius, :null => false
    	t.integer :orbit_duration
    	t.integer :current_orbit
    	t.string :orbit_type, :null => false, :default => "circle"

      t.timestamps
    end

    add_index :systems, :name
  end
end
