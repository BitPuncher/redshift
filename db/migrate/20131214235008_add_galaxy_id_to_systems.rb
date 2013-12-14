class AddGalaxyIdToSystems < ActiveRecord::Migration
  def change
  	add_column :systems, :galaxy_id, :integer
  end
end
