Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  resources :offers do
    resources :bookings, only: [:create, :edit, :update, :new, :show, :index]
    resources :places
  end
  resources :bookings, only: [:destroy]

  resources :chatrooms, only: %i[show create] do
    resources :messages, only: :create
  end
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
