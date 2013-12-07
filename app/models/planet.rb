class Planet < ActiveRecord::Base
  attr_accessible :name, :distance, :diameter, :orbit, :radius, :orbit_duration,
  	:current_orbit

  belongs_to :system
end