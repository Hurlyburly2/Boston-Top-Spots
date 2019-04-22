require 'rails_helper'

RSpec.describe User, type: :model do

  feature "successfull creation of a new user" do
    let!(:newUser) { User.create(username: 'Fail Example', email: 'fail@example.com', password: 'password') }

    scenario 'successfull creation of a new user' do
      expect(newUser.username).to eq('Fail Example')
      expect(newUser.email).to eq('fail@example.com')
      expect(newUser.password).to eq('password')
    end
  end

  feature "unsuccessfull creation of a new user" do
    let!(:newUser) { User.create() }

    scenario 'unsuccessfull creation of a new user' do
      # binding.pry
      expect(newUser.errors.full_messages).to include("Username can't be blank")
      expect(newUser.errors.full_messages).to include("Email can't be blank")
      expect(newUser.errors.full_messages).to include("Password can't be blank")
    end
  end
end
