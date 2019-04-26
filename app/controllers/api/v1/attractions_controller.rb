class Api::V1::AttractionsController < ApplicationController

  def show
    attractions = AttractionShowSerializer.new(Attraction.find(params[:id]))

    render json: {
      attractions: attractions,
      current_user: current_user
    }
  end

  def destroy
    # binding.pry
    deleted_attraction = Attraction.find(params["id"])
    deleted_attraction.reviews.delete_all
    deleted_attraction.delete
    render json: { responseText: "Response is successful" }
  end
end
