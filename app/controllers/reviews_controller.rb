class ReviewsController < ApplicationController
  def index
    @reviews = current_user.reviews
  end

  def destroy

  end

  def edit
    @ratingOptions = [["1 Star", 1], ["2 Stars", 2], ["3 Stars", 3], ["4 Stars", 4], ["5 Stars", 5]]
    @review = Review.find(params["id"])
  end

  def update
    oldParams = Review.find(params["id"])
    params["review"]["rating"] = params["review"]["rating"].to_i
    oldParams.update!(review_params)
    
    redirect_to reviews_path
  end

  def review_params
    params.require(:review).permit(:rating, :body)
  end
end
