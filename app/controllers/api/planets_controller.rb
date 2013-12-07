class Api::PlanetsController < ApplicationController
	respond_to :json

	def show
		@planet = Planet.find(params[:id])

		render :json => @planets
	end

	def index
		@planets = Planet.where(:planet_id == params[:planet_id]).all

		render :json => @planets
	end
end
