Rails.application.routes.draw do
  root 'attractions#index'
  devise_for :users

  resources :attractions, only: [:index, :new, :create, :show]
  resources :reviews, only: [:index, :destroy, :edit, :update]

  namespace :api do
    namespace :v1 do
      resources :attractions, only: [:show, :destroy] 
      resources :reviews, only: [:index, :create, :destroy]
      resources :votes, only: [:create]
    end
  end
end
