class ReviewSeeder
  REVIEW_DATA = [
    {rating: 5, body: "A great attraction in Boston", attraction: Attraction.first, user: User.first},
    {rating: 4, body: "A good attraction in Boston", attraction: Attraction.first, user: User.last},
    {rating: 3, body: "A mediocre attraction in Boston", attraction: Attraction.first, user: User.first},
    {rating: 0, body: "A terrible attraction in Boston", attraction: Attraction.second, user: User.second},
    {rating: 3, body: "It is okay", attraction: Attraction.second, user: User.last},
    {rating: 4, body: "Will visit again!", attraction: Attraction.third, user: User.third},
    {rating: 0, body: "A terrible attraction in Boston", attraction: Attraction.second, user: User.second},
    {rating: 1, body: "Almost a 0", attraction: Attraction.last, user: User.last},
    {rating: 2, body: "Sub-par!", attraction: Attraction.first, user: User.last},
    {rating: 3, body: "Pretty average", attraction: Attraction.second, user: User.first}
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
