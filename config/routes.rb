Rails.application.routes.draw do
  get   'diagram/index'
  post  'diagram/save'
  get   'hello/say_hello'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
