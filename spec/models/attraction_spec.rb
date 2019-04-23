require 'rails_helper'

RSpec.describe Attraction, type: :model do
  let!(:attraction) { Attraction.create(name: "Duck Tours", description: "Splashing good time!", address: "123 Splash Town", city: "Boston", state: "MA", zip: "12345") }

  describe "Validations" do

    it "is valid with valid attributes" do
      expect(attraction).to be_valid
    end

    it "is not valid without a name" do
      attraction.name = nil
      expect(attraction).to_not be_valid
    end

    it "is not valid without a description" do
      attraction.description = nil
      expect(attraction).to_not be_valid
    end

    it "is not valid without an address" do
      attraction.address = nil
      expect(attraction).to_not be_valid
    end

    it "is not valid without a city" do
      attraction.city = nil
      expect(attraction).to_not be_valid
    end

    it "is not valid without a state" do
      attraction.state = nil
      expect(attraction).to_not be_valid
    end

    it "is not valid without a zip" do
      attraction.zip = nil
      expect(attraction).to_not be_valid
    end
   end
  end
