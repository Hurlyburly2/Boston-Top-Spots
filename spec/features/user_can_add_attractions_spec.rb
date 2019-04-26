require 'rails_helper'
require 'devise'

feature "users can add new attractions" do
  scenario "user adds a new attraction successfully" do
    user = FactoryBot.create(:user)
    login_as(user, :scope => :user)

    visit new_attraction_path
    expect(page).to have_content "Submit a New Attraction Here!"

    fill_in 'Name', with: "Duck Tours"
    fill_in 'Description', with: "A splashing good time!"
    fill_in 'Address', with: "123 Boston Way"
    fill_in 'City', with: "Boston"
    fill_in 'State', with: "MA"
    fill_in 'Zip', with: "02134"

    click_button "Add Your Attraction!"

    expect(page).to have_content "Your attraction has been added successfully!"
    expect(page).to have_content "Duck Tours"
  end

  scenario "user does not provide proper information for an attraction" do
    visit new_attraction_path

    click_button "Add Your Attraction!"
    expect(page).to have_content "Name can't be blank"
    expect(page).to have_content "Description can't be blank"
    expect(page).to have_content "Address can't be blank"
    expect(page).to have_content "City can't be blank"
    expect(page).to have_content "State can't be blank"
    expect(page).to have_content "Zip can't be blank"
  end
end
