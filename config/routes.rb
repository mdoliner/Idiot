Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:new, :create, :destroy]
    match 'users/current' => 'users#current', via: :get
    resources :users
    resources :genres do
      resources :pages, only: [:index]
    end
    resources :pages, except: [:index]
    resources :annotations
    resources :artists
  end
  # resource :session, only: [:new, :create, :destroy]
  # resources :users
  # resources :genres do
  #   resources :pages, only: [:index]
  # end
  # resources :pages, except: [:index]
end
