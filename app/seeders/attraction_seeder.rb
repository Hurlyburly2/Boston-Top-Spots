class AttractionSeeder
  ATTRACTION_DATA = [
    {name: "Test-name1", description: "Test-description1", address: "Test-address1", city: "Test-city1", state: "Test-state1", zip: "Test-zip1", user_id: 3},
    {name: "Test-name2", description: "Test-description2", address: "Test-address2", city: "Test-city2", state: "Test-state2", zip: "Test-zip2", user_id: 2},
    {name: "Test-name3", description: "Test-description3", address: "Test-address3", city: "Test-city3", state: "Test-state3", zip: "Test-zip3", user_id: 4},
    {name: "Test-name4", description: "Test-description4", address: "Test-address4", city: "Test-city4", state: "Test-state4", zip: "Test-zip4", user_id: 2}
  ]

  def self.seed!
    ATTRACTION_DATA.each do |attraction|
      name = attraction[:name]
      another = Attraction.find_or_initialize_by(name: name)
      another.assign_attributes(attraction)
      another.save!
    end
  end
end
