class Api::V1::AttractionsController < ApplicationController

  def show
    attractions = AttractionShowSerializer.new(Attraction.find(params[:id]))

    render json: {
      attractions: attractions,
      current_user: current_user
    }
  end

  def destroy
    deleted_attraction = Attraction.find(params["id"])
    deleted_attraction.destroy
    render json: { responseText: "Attraction was successfully deleted" }
  end
end
