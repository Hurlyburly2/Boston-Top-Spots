require 'rails_helper'


RSpec.describe Api::V1::ReviewsController, type: :controller do
  describe 'POST#create' do
    it "creates a new review" do
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

        params = {
        review: {
          rating: 5,
          body: 'A splashing good time',
          attraction: attraction,
          user: user
        }
      }

      post :create, {params:  params}
      expect(attraction.user).to be(user)
    end

    it "returns the json of the newly posted review" do
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

        params = {
        review: {
          rating: 5,
          body: 'A splashing good time',
          attraction_id: attraction.id,
          user_id: user.id
        }
      }

      post :create, params:  params
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json).to_not be_kind_of(Array)
      expect(returned_json["review"]["body"]).to eq "A splashing good time"
      expect(returned_json["review"]["attraction_id"]).to eq attraction.id
      expect(returned_json["review"]["user_id"]).to eq user.id
      expect(returned_json["review"]["rating"]).to eq 5

    end
  end

  it "should delete the review" do
    user = User.create!(username: "NickAlberts", email: "unicornlova@gmail.com", password: "binicorn123")
    attraction = Attraction.create!(name: "Duck Tours", description: "A splashing good time!", address: "123 Boston St.", city: "Boston", state: "MA", zip: "01234", user: user)
    review = Review.create!(body: "This place is sweetnes!", rating: 4, attraction: attraction, user: user)

    get :destroy, params: { id: review.id }
    return_json = JSON.parse(response.body)
    expect(response.status).to eq 200
    expect(response.content_type).to eq ("application/json")

    expect(return_json["reviews"]).to eq([])
  end

end
