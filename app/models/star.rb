class Star < ActiveRecord::Base
  attr_accessible :name, :mass, :diameter, :radius

  belongs_to :system
end
