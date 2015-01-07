Rails.application.routes.draw do
  root to: 'genres#index'
  resource :session, only: [:new, :create, :destroy]
  resources :users
  resources :genres
  resources :pages
end
