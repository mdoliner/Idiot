Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api do
    resource :session, only: [:new, :create, :destroy]
    resources :users
    resources :genres do
      resources :pages, only: [:index]
    end
    resources :pages, except: [:index]
  end
  # resource :session, only: [:new, :create, :destroy]
  # resources :users
  # resources :genres do
  #   resources :pages, only: [:index]
  # end
  # resources :pages, except: [:index]
end
