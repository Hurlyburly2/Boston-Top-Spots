require 'rails_helper'

feature "visitor sees a list of attractions and links to show pages" do
  scenario "sees a list of attractions" do
    user = User.create!(
      username: "NickAlberts",
      email: "unicornlova@gmail.com",
      password: "binicorn123")
    duck_tour = Attraction.create!(name: "Duck Tour", description: "Just an awesome tour on the land AND on the water.", address: "123 Boston st.", city: "Boston", state: "MA", zip: "03234", user: user)
    ghost_tour = Attraction.create!(name: "Boston Ghost Tour", description: "Spooky!", address: "279 Spooky st.", city: "Boston", state: "MA", zip: "09876", user: user)

    visit attractions_path

    expect(page).to have_content "Duck Tour"
    expect(page).to have_link "Ghost Tour"
  end
end
