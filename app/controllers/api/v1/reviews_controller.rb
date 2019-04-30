class Api::V1::ReviewsController < ApplicationController

  def create
    review = Review.new(review_params)
    if review.save
      attractions = AttractionShowSerializer.new(review.attraction)
      user = current_user
      #
      render json: {
        attractions: attractions,
        user: user
      }
    else
      render json: { error: review.errors.full_messages },
      status: :unprocessable_entity
      #
    end
  end

  def destroy
    delete_review = Review.find(params["id"])
    attraction = delete_review.attraction
    delete_review.delete
    render json: {reviews: attraction.reviews}
  end

  private

  def review_params
    params.require(:review).permit(:rating, :body, :attraction_id, :user_id)
  end
end
