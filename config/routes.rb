Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:new, :create, :destroy]
    match 'users/current' => 'users#current', via: :get
    match 'users/logout' => 'users#logout', via: :get
    resources :users
    resources :genres
    resources :pages
    resources :annotations
    resources :artists
    resources :improvements
    resources :collections
  end
  # resource :session, only: [:new, :create, :destroy]
  # resources :users
  # resources :genres do
  #   resources :pages, only: [:index]
  # end
  # resources :pages, except: [:index]
end
