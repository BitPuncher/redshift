class Planet < ActiveRecord::Base
  attr_accessible :name, :distance, :diameter, :orbit, :radius

  belongs_to :system
end