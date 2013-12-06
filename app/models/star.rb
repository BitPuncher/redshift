class Star < ActiveRecord::Base
  attr_accessible :name, :mass, :diameter

  belongs_to :system
end
