Rails.application.routes.draw do

  get 'sessions/create'
  get 'sessions/destroy'
  get '/me', to: "users#show"
  
  resources :reviews
  resources :movies, only: [:index, :show]

  resources :users, only: [:show, :create]

  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }


end
