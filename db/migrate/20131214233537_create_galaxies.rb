class CreateGalaxies < ActiveRecord::Migration
  def change
    create_table :galaxies do |t|
    	t.string :name, :null => false
    	t.integer :radius

      t.timestamps
    end

    add_index :galaxies, :name
  end
end
