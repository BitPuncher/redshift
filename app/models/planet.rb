class Planet < ActiveRecord::Base
  attr_accessible :name, :distance, :diameter, :orbit, :orbit_radius, :orbit_duration,
  	:current_orbit

  belongs_to :system
end