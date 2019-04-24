class Api::V1::AttractionsController < ApplicationController
  #serialization_scope :current_user #WE WILL USE THIS LATER

  def show
    render json: {
      attractions: Attraction.find(params[:id]), serializer: AttractionShowSerializer,
      current_user: current_user,
      reviews: Review.where(attraction_id: params[:id])
    }
  end
end
