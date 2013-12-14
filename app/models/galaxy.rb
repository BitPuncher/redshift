class Galaxy < ActiveRecord::Base
  attr_accessible :name, :radius

  has_many :systems
end
