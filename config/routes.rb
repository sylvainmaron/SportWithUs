Rails.application.routes.draw do
  get 'places/name'
  devise_for :users
  root to: 'pages#home'
  resources :offers do
    resources :bookings
    resources :places
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
