Rails.application.routes.draw do
  root 'attractions#index'
  devise_for :users

  resources :attractions, only: [:index, :new, :create, :show]
end
