Sicoplace::Application.routes.draw do
  get "resources/index"
  get "resources/new"
  get "resources/edit"
  get "resources/create"
  get "resources/update"
  get "resources/destroy"
  namespace :api do
    resources :comments, only: [:index, :create, :update, :deatroy]
  end

  scope module: :web do
    root to: "welcome#index"
  end
end
