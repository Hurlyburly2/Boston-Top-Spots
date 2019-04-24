class ReviewSeeder
  REVIEW_DATA = [
    {rating: 5, body: "A great attraction in Boston", attraction: Attraction.first},
    {rating: 4, body: "A good attraction in Boston", attraction: Attraction.first},
    {rating: 3, body: "A mediocre attraction in Boston", attraction: Attraction.first},
    {rating: 0, body: "A terrible attraction in Boston", attraction: Attraction.second}
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
