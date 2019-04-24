Rails.application.routes.draw do
  root 'attractions#index'
  devise_for :users

  resources :attractions, only: [:index, :new, :create, :show]

  namespace :api do
    namespace :v1 do
      resources :attractions, only: [:show]
    end
  end
end
