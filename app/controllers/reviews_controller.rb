class ReviewsController < ApplicationController
  def index
    @reviews = current_user.reviews
  end

  def destroy
<<<<<<< HEAD

  end

  def edit
    @ratingOptions = [["1 Star", 1], ["2 Stars", 2], ["3 Stars", 3], ["4 Stars", 4], ["5 Stars", 5]]
    @review = Review.find(params["id"])
  end

  def update
    @review = Review.find(params["id"])
    params["review"]["rating"] = params["review"]["rating"].to_i
    @review.assign_attributes(review_params)

    if @review.save
      redirect_to reviews_path
    else
      @ratingOptions = [["1 Star", 1], ["2 Stars", 2], ["3 Stars", 3], ["4 Stars", 4], ["5 Stars", 5]]
      flash.now[:sad] = @review.errors.full_messages.join(", ")
      render :edit
    end

  end

  def review_params
    params.require(:review).permit(:rating, :body)
=======
>>>>>>> master
  end
end
