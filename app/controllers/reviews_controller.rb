class ReviewsController < ApplicationController
  def index
    @reviews = current_user.reviews
  end

  def destroy
    binding.pry
  end
end
