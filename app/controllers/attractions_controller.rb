class AttractionsController < ApplicationController
  def index
    @attractions = Attraction.all
  end

  def new
    @attraction = Attraction.new
  end

  def create
    @attraction = Attraction.new(attraction_params)

    if @attraction.save
      flash[:notice] = "Your attraction has been added successfully!"
      redirect_to root_path
    else
      flash.now[:notice] =
      @attraction.errors.full_messages.join(', ')
      render :new
    end
  end

  def show
    @attraction = Attraction.find(params[:id])
  end

  # def current_user
  #   @current_user ||= User.find(session[:user_id]) if session[:user_id]
  # end

  private
  def attraction_params
    params.require(:attraction).permit(
      :name,
      :description,
      :address,
      :city,
      :state,
      :zip,
      :user_id)
  end
end
