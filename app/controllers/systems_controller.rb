class SystemsController < ApplicationController
	respond_to :json

	def show
		@system = System.find(params[:id])

		render @system => :json
	end
end