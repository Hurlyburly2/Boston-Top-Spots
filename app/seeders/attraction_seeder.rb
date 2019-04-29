class AttractionSeeder
  ATTRACTION_DATA = [
    {name: "Test-name1", description: "Test-description1", address: "Test-address1", city: "Test-city1", state: "Test-state1", zip: "Test-zip1", user: User.first},
    {name: "Test-name2", description: "Test-description2", address: "Test-address2", city: "Test-city2", state: "Test-state2", zip: "Test-zip2", user: User.first},
    {name: "Test-name3", description: "Test-description3", address: "Test-address3", city: "Test-city3", state: "Test-state3", zip: "Test-zip3", user: User.second},
    {name: "Test-name4", description: "Test-description4", address: "Test-address4", city: "Test-city4", state: "Test-state4", zip: "Test-zip4", user: User.second},
    {name: "Test-name5", description: "Test-description5", address: "Test-address5", city: "Test-city5", state: "Test-state5", zip: "Test-zip5", user: User.third},
    {name: "Test-name6", description: "Test-description6", address: "Test-address6", city: "Test-city6", state: "Test-state6", zip: "Test-zip6", user: User.fourth},
    {name: "Test-name7", description: "Test-description7", address: "Test-address7", city: "Test-city7", state: "Test-state7", zip: "Test-zip7", user: User.last},
    {name: "Test-name8", description: "Test-description8", address: "Test-address8", city: "Test-city8", state: "Test-state8", zip: "Test-zip8", user: User.last}
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
