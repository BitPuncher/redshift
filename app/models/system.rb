class System < ActiveRecord::Base
  attr_accessible :name, :radius, :orbit_duration, :current_orbit, :orbit_type

  has_many :planets
  has_one :star
end
