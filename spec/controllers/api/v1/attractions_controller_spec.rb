require 'rails_helper'

RSpec.describe Api::V1::AttractionsController, type: :controller do
  describe 'GET#show' do
    it "should show the correct attraction" do
      user = User.create!(username: "UnicornBoy", email: "unicornlova123@gmail.com", password: "binicorn123")
      attraction = Attraction.create!(name: "Duck Tours", description: "A splashing good time!", address: "123 Boston St.", city: "Boston", state: "MA", zip: "01234", user: user)

      get :show, params: { id: attraction.id, user:user }
      return_json = JSON.parse(response.body)
      return_json["user"] = user

      expect(response.status).to eq 200
      expect(response.content_type).to eq ("application/json")

      expect(return_json["attractions"]["name"]).to eq("Duck Tours")
      expect(return_json["attractions"]["description"]).to eq("A splashing good time!")
      expect(return_json["attractions"]["address"]).to eq("123 Boston St.")
      expect(return_json["attractions"]["city"]).to eq("Boston")
      expect(return_json["attractions"]["state"]).to eq("MA")
      expect(return_json["attractions"]["zip"]).to eq("01234")
      expect(return_json["user"].id).to eq(attraction.user.id)
    end

    it "should list reviews for the attraction" do

      user = User.create!(username: "UnicornBoy1", email: "unicornlova124@gmail.com", password: "binicorn123")

      attraction = Attraction.create!(name: "Duck Tours", description: "A splashing good time!", address: "123 Boston St.", city: "Boston", state: "MA", zip: "01234", user: user)

      review = Review.create!(rating: 5, body: "A fabulous time on the land and water!!", user: user, attraction: attraction)

      get :show, params: { id: attraction.id }
      return_json = JSON.parse(response.body)

      expect(return_json["attractions"]["reviews"].length).to eq(1)
      expect(return_json["attractions"]["reviews"][0]["rating"]).to eq(5)
      expect(return_json["attractions"]["reviews"][0]["reviewer"]["username"]).to eq("UnicornBoy1")
      expect(return_json["attractions"]["reviews"][0]["reviewer"]["email"]).to eq(nil)
    end
  end
end
