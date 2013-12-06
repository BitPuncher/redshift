class Planet < ActiveRecord::Base
  attr_accessible :name, :distance, :diameter, :orbit

  belongs_to :system
end
