Rails.application.routes.draw do
  root to: 'genres#index'
  resource :session, only: [:new, :create, :destroy]
  resources :users
  resources :genres do
    resources :pages, only: [:index]
  end
  resources :pages, except: [:index]
end
