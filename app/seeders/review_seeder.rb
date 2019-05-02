class ReviewSeeder
  REVIEW_DATA = [
    {rating: 5, body: "A great attraction in Boston", attraction: Attraction.first, user: User.first},
    {rating: 4, body: "A good attraction in Boston", attraction: Attraction.first, user: User.last},
    {rating: 3, body: "A mediocre attraction in Boston", attraction: Attraction.first, user: User.first},
    {rating: 1, body: "A terrible attraction in Boston", attraction: Attraction.second, user: User.second},
    {rating: 3, body: "It is okay", attraction: Attraction.second, user: User.last},
    {rating: 4, body: "Will visit again!", attraction: Attraction.third, user: User.third},
    {rating: 1, body: "A terrible attraction in Boston", attraction: Attraction.second, user: User.second},
    {rating: 1, body: "Almost a 0", attraction: Attraction.last, user: User.last},
    {rating: 2, body: "Sub-par!", attraction: Attraction.first, user: User.last},
    {rating: 3, body: "Pretty average", attraction: Attraction.second, user: User.first},
    {rating: 5, body: "The greatest attraction in Boston", attraction: Attraction.second, user: User.second},
    {rating: 4, body: "A pretty-good attraction in Boston", attraction: Attraction.third, user: User.third},
    {rating: 3, body: "A rather mediocre attraction in Boston", attraction: Attraction.fourth, user: User.fourth},
    {rating: 1, body: "A horrible attraction in Boston", attraction: Attraction.second, user: User.last},
    {rating: 3, body: "It is kind of okay", attraction: Attraction.first, user: User.last},
    {rating: 4, body: "Will visit again, and bring my family too!", attraction: Attraction.second, user: User.third},
    {rating: 1, body: "A horrific attraction", attraction: Attraction.second, user: User.second},
    {rating: 1, body: "Almost gave it a 0", attraction: Attraction.last, user: User.last},
    {rating: 2, body: "Pretty bad, will bring my kids next time!", attraction: Attraction.fourth, user: User.last},
    {rating: 3, body: "Mediocricy at it's finest!", attraction: Attraction.second, user: User.first},
    {rating: 5, body: "This attraction is the BOMB!", attraction: Attraction.last, user: User.first},
    {rating: 4, body: "My fam liked it! Good enough for me", attraction: Attraction.first, user: User.second},
    {rating: 3, body: "Seen better", attraction: Attraction.first, user: User.third},
    {rating: 1, body: "Have you seen 'Idiocracy'?", attraction: Attraction.first, user: User.fourth},
    {rating: 3, body: "It is okayish", attraction: Attraction.second, user: User.second},
    {rating: 4, body: "Will visit again, and bring my dogs!", attraction: Attraction.second, user: User.third},
    {rating: 1, body: "A terrible attraction in Boston", attraction: Attraction.second, user: User.first},
    {rating: 1, body: "If I could give a 0, I would!", attraction: Attraction.second, user: User.fourth},
    {rating: 2, body: "Below average! I am pretty sure.", attraction: Attraction.third, user: User.last},
    {rating: 3, body: "Not very pretty", attraction: Attraction.third, user: User.first},
    {rating: 5, body: "The greater attraction in Greater Boston", attraction: Attraction.third, user: User.second},
    {rating: 4, body: "A pretty-goodish attraction in Boston", attraction: Attraction.third, user: User.third},
    {rating: 3, body: "Rather mediocre attraction in Boston", attraction: Attraction.third, user: User.fourth},
    {rating: 1, body: "Could it be any worse? I think not!", attraction: Attraction.last, user: User.first},
    {rating: 3, body: "Could be better, could be worse.", attraction: Attraction.last, user: User.second},
    {rating: 4, body: "Will bring my family next time", attraction: Attraction.last, user: User.third},
    {rating: 1, body: "Waste of time!", attraction: Attraction.last, user: User.fourth},
    {rating: 1, body: "Almost gave it a 0.5", attraction: Attraction.first, user: User.fourth},
    {rating: 2, body: "Bad, will bring my kids next time!", attraction: Attraction.first, user: User.third},
    {rating: 3, body: "It is fiiiinnnnneee!", attraction: Attraction.first, user: User.second}
  ]

  def self.seed!
    REVIEW_DATA.each do |review|
      body = review[:body]
      another = Review.find_or_initialize_by(body: body)
      another.assign_attributes(review)
      another.save!
    end
  end
end
