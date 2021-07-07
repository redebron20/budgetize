Rails.application.routes.draw do
  resources :users do 
    resources :budgets do
      resources :expenses
    end 
  end 

  post '/login', to: 'sessions#create'
  get '/profile', to: 'users#profile'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
