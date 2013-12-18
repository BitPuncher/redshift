class Galaxy < ActiveRecord::Base
  attr_accessible :name, :orbit_radius

  has_many :systems
end
