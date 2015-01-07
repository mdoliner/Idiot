Rails.application.routes.draw do
  root to: 'genres#index'
  resources :session, only: [:new, :create, :destroy]
  resources :users
  resources :genres
  resources :pages
end
