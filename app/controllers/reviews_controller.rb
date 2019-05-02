class ReviewsController < ApplicationController
  def index
    @reviews = current_user.reviews
  end

  def destroy

  end

  def edit
    @ratingOptions = [["How many Terry's would you give this experience?"],["1 Terry", 1], ["2 Terry's", 2], ["3 Terry's", 3], ["4 Terry's", 4], ["5 Terry's", 5]]
    @review = Review.find(params["id"])
  end

  def update
    @review = Review.find(params["id"])
    params["review"]["rating"] = params["review"]["rating"].to_i
    @review.assign_attributes(review_params)

    if @review.save
      redirect_to reviews_path
    else
      @ratingOptions = [["1 Terry's", 1], ["2 Terry", 2], ["3 Terry's", 3], ["4 Terry's", 4], ["5 Terry's", 5]]
      flash.now[:sad] = @review.errors.full_messages.join(", ")
      render :edit
    end

  end

  def review_params
    params.require(:review).permit(:rating, :body)
  end
end
