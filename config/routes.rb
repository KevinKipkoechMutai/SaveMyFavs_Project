Rails.application.routes.draw do
  resources :my_favorites, only: [:index, :show, :create, :update]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  #root 'homepage#index'
  delete '/my_favorites/:id', to: "my_favorites#destroy"
end
