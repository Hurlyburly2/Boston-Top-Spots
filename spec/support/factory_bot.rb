require 'factory_bot'

FactoryBot.define do
  factory :user do
    sequence(:email) {|n| "user#{n}@example.com" }
    username { "new user" }
    password { 'password' }
    password_confirmation { 'password' }
  end

end
