require 'rails_helper'

RSpec.describe Review, type: :model do

  describe "review is created successfully" do
    let!(:attraction) { Attraction.create!(name: "Duck Tours", description: "Splashing good time!", address: "123 Splash Town", city: "Boston", state: "MA", zip: "12345") }
    let!(:newUser) { User.create(username: 'Fail Example', email: 'fail@example.com', password: 'password') }
    let!(:review) { Review.create!(body: "this attraction rocks", rating: 5, attraction: attraction, user: newUser) }

    it "has a body" do
      expect(review.body).to eq "this attraction rocks"
    end

    it "has a rating" do
      expect(review.rating).to eq 5
    end
  end

  describe "review is NOT created successfully" do
    let!(:review) { Review.create() }
    it "shows validation errors for a 'blank' review" do
      expect(review.errors.full_messages).to include "Body can't be blank"
      expect(review.errors.full_messages).to include "Rating can't be blank"
      expect(review.errors.full_messages).to include "Rating is not a number"
      expect(review.errors.full_messages).to include "Attraction must exist"
      expect(review.errors.full_messages).to include "User must exist"
      expect(review.errors.full_messages.length).to eq 5
    end
  end

  describe "review is given bad parameters" do
    let!(:attraction) { Attraction.create!(name: "Duck Tours", description: "Splashing good time!", address: "123 Splash Town", city: "Boston", state: "MA", zip: "12345") }
    let!(:review) { Review.create(body: "this attraction rocks", rating: 500, attraction: attraction) }

    it "shows error for improper rating" do
      expect(review).to_not be_valid
     end
  end
end
