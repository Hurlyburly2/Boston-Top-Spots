require 'rails_helper'

RSpec.describe Api::V1::VotesController, type: :controller do
  describe 'POST#create' do
    it "creates a new vote" do
      user = User.create!(
        username: "NickAlberts",
        email: "unicornlova@gmail.com",
        password: "binicorn123")

      attraction = Attraction.create!(
        name: "Duck Tours", description:
        "A splashing good time!",
        address: "123 Boston St.",
        city: "Boston",
        state: "MA",
        zip: "01234",
        user: user)

      review = Review.create!(
        rating: 5,
        body: "A fabulous time on the land and water!!",
        user: user,
        attraction: attraction)

        params = {
        vote: {
          value: 1,
          review: review,
          user: user
        }
      }

      post :create, {params:  params}
      expect(review.user).to be(user)
    end

    it "returns the json of the newly posted vote" do
      user = User.create!(
        username: "NickAlberts",
        email: "unicornlova@gmail.com",
        password: "binicorn123")

      attraction = Attraction.create!(
        name: "Duck Tours", description:
        "A splashing good time!",
        address: "123 Boston St",
        city: "Boston",
        state: "MA",
        zip: "01234",
        user: user)

      review = Review.create!(
        rating: 5,
        body: "A fabulous time on the land and water!!",
        user: user,
        attraction: attraction)

        params = {
        vote: {
          value: 1,
          review: review,
          user: user
        }
      }

      post :create, params:  params
      returned_json = JSON.parse(response.body)
      binding.pry

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      # expect(returned_json).to be_kind_of(Hash)
      # expect(returned_json).to_not be_kind_of(Array)
      # expect(returned_json["attractions"]["reviews"][0]["body"]).to eq "A splashing good time"
      # expect(returned_json["attractions"]["id"]).to eq attraction.id
      # expect(returned_json["attractions"]["reviews"][0]["reviewer"]["id"]).to eq user.id
      # expect(returned_json["attractions"]["reviews"][0]["rating"]).to eq 5
    end
  end
end