Sicoplace::Application.routes.draw do
  namespace :api do
    resources :comments, only: [:index, :create, :update, :deatroy]
  end

  scope module: :web do
    root to: "welcome#index"
  end
end
