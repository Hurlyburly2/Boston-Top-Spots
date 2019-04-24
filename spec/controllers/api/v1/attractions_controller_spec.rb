require 'rails_helper'

RSpec.describe Api::V1::AttractionsController, type: :controller do
  describe 'GET#show' do
    it "should show the correction attraction" do
      attraction = Attraction.create(name: "Duck Tours", description: "A splashing good time!", address: "123 Boston St.", city: "Boston", state: "MA", zip: "01234")

      get :show, params: { id: attraction.id }
      return_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq ("application/json")

      expect(return_json["name"]).to eq("Duck Tours")
      expect(return_json["description"]).to eq("A splashing good time!")
      expect(return_json["address"]).to eq("123 Boston St.")
      expect(return_json["city"]).to eq("Boston")
      expect(return_json["state"]).to eq("MA")
      expect(return_json["zip"]).to eq("01234")
    end

    it "should list reviews for the attraction" do


      user = User.create!(username: "NickAlberts", email: "unicornlova@gmail.com", password: "binicorn123")

      attraction = Attraction.create!(name: "Duck Tours", description: "A splashing good time!", address: "123 Boston St.", city: "Boston", state: "MA", zip: "01234")

      review = Review.create!(rating: 5, body: "A fabulous time on the land and water!!", user: user, attraction: attraction)

      get :show, params: { id: attraction.id }
      return_json = JSON.parse(response.body)

      expect(return_json["reviews"].length).to eq(1)
      expect(return_json["reviews"][0]["rating"]).to eq(5)
      expect(return_json["reviews"][0]["reviewer"]["username"]).to eq("NickAlberts")
      expect(return_json["reviews"][0]["reviewer"]["email"]).to eq(nil)
    end
  end
end
