class Api::V1::AttractionsController < ApplicationController

  def show
    attractions = AttractionShowSerializer.new(Attraction.find(params[:id]))

    render json: {
      attractions: attractions,
      current_user: current_user
    }
  end
  
  def destroy
    redirect_to root_path
  end
end
