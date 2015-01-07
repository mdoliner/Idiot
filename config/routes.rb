Rails.application.routes.draw do
  root to: 'genres#index'
  resources :genres
  resources :pages
end
