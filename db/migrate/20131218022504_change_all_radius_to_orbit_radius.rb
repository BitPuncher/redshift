class ChangeAllRadiusToOrbitRadius < ActiveRecord::Migration
  def up
  	remove_column :systems, :radius
  	remove_column :planets, :radius
  	remove_column :galaxies, :radius

  	add_column :systems, :orbit_radius, :integer
  	add_column :planets, :orbit_radius, :integer
  	add_column :galaxies, :orbit_radius, :integer
  end

  def down
  	remove_column :systems, :orbit_radius
  	remove_column :planets, :orbit_radius
  	remove_column :galaxies, :orbit_radius

  	add_column :systems, :radius, :integer
  	add_column :planets, :radius, :integer
  	add_column :galaxies, :radius, :integer
  end
end
