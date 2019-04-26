class Api::V1::AttractionsController < ApplicationController

  def show
    attractions = AttractionShowSerializer.new(Attraction.find(params[:id]))
    user = current_user
    render json: {
      attractions: attractions,
      user: user
    }
  end

  def destroy
    deleted_attraction = Attraction.find(params["id"])
    deleted_attraction.destroy
    render json: { responseText: "Attraction was successfully deleted" }
  end
end
