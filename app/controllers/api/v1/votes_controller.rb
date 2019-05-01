class Api::V1::VotesController < ApplicationController
  def create
    vote = Vote.new(vote_params)

    if vote.save
      review = Review.find(vote.review.id)
      attractions = AttractionShowSerializer.new(review.attraction)
      user = current_user
      render json: {
        attractions: attractions,
        user: user
      }
    else
      render json: { error: vote.errors.full_messages },
      status: :unprocessable_entity
    end
  end

  private

  def vote_params
    params.require(:vote).permit(:value, :review_id, :user_id)
  end
end
