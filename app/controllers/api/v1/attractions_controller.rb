class Api::V1::AttractionsController < ApplicationController

  def show
    attractions = AttractionShowSerializer.new(Attraction.find(params[:id]))
    user = current_user
    render json: {
      attractions: attractions,
      user: user
    }
  end
end
