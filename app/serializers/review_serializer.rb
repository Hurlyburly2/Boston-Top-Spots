class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :body, :reviewer, :score

  belongs_to :attraction
  belongs_to :user
  has_many :votes

  def reviewer
    author = {}
    author["id"] = object.user.id
    author["username"] = object.user.username
    return author
  end

  def score
    score = 0
    object.votes.each do |vote|
      score += vote.value
    end
    return score 
  end
end
