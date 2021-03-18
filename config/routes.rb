Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  resources :offers do
    resources :bookings
    resources :places
  end

  resources :chatrooms, only: %i[show create] do
    resources :messages, only: :create
  end
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
