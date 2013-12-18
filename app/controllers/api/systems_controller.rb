class Api::SystemsController < ApplicationController
	respond_to :json

	def show
		@system = System.includes(:planets, :star).find(params[:id])

		render :json => @system, :include => [:star, :planets]
	end

	def index
		@systems = System.all

		render :json => @systems, :include => [:star, :planets]
	end
end