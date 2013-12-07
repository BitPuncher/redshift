Redshift::Application.routes.draw do
  namespace :api do
    resources :systems do
      resources :planets, :only => [:index, :create, :new]
    end
    resources :planets, :only => [:show, :edit, :update, :destroy]
  end

  root to: "static_pages#root"
end