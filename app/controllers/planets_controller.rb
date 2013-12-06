class PlanetsController < ApplicationController
	respond_to :json

	def show
		@planet = Planet.find(params[:id])

		render @planet => :json
	end

	def index
		@planets = Planet.where(:planet_id == params[:planet_id]).all

		render @planets => :json
	end
end
