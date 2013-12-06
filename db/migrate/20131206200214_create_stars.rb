class CreateStars < ActiveRecord::Migration
  def change
    create_table :stars do |t|
    	t.string :name, :null => false
    	t.integer :mass, :null => false
    	t.integer :diameter, :null => false

      t.timestamps
    end

    add_index :stars, :name
  end
end
