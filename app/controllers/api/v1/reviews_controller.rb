class Api::V1::ReviewsController < ApplicationController

  def index
    reviews = current_user.reviews
    serialized_reviews = reviews.map do |review|
      ReviewSerializer.new(review)
    end
    render json: {reviews: serialized_reviews}
  end

  def create
    review = Review.new(review_params)
    if review.save
      attractions = AttractionShowSerializer.new(review.attraction)
      user = current_user
      render json: {
        attractions: attractions,
        user: user
      }
    else
      render json: { error: review.errors.full_messages },
      status: :unprocessable_entity
    end
  end

  def destroy
    if params["to_get"] == "review_index"
      delete_review = Review.find(params["id"])
      attraction = delete_review.attraction
      delete_review.delete
      reviews = current_user.reviews
      serialized_reviews = reviews.map do |review|
        ReviewSerializer.new(review)
      end
      render json: {reviews: serialized_reviews}
    else
      delete_review = Review.find(params["id"])
      attraction = delete_review.attraction
      delete_review.delete
      render json: {reviews: attraction.reviews}
    end
  end

  private

  def review_params
    params.require(:review).permit(:rating, :body, :attraction_id, :user_id)
  end
end
