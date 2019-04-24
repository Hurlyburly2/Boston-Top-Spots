class Api::V1::AttractionsController < ApplicationController
  #serialization_scope :current_user #WE WILL USE THIS LATER

  def show
    render json: Attraction.find(params[:id]), serializer: AttractionShowSerializer
  end
end
