class System < ActiveRecord::Base
  attr_accessible :name, :orbit_radius, :orbit_duration, :current_orbit, :orbit_type, 
  :diameter

  has_many :planets
  has_one :star

  belongs_to :galaxy
end