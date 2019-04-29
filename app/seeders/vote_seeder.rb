class VoteSeeder
  VOTE_DATA = [
    {value: 1, review: Review.first, user: User.first},
    {value: 1, review: Review.second, user: User.last},
    {value: 1, review: Review.last, user: User.third},
    {value: 1, review: Review.first, user: User.second},
    {value: 1, review: Review.last, user: User.first},
    {value: 1, review: Review.last, user: User.last},
  ]

  def self.seed!
   VOTE_DATA.each do |vote|
    Vote.create!(vote)
   end
  end
end
