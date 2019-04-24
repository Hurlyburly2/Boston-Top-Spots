class Api::V1::AttractionsController < ApplicationController

  def show
    render json: {
      attractions: Attraction.find(params[:id]), serializer: AttractionShowSerializer,
      current_user: current_user,
      reviews: Review.where(attraction_id: params[:id])
    }
  end
end
