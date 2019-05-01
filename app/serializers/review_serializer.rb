class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :body, :reviewer, :location, :votes, :score

  belongs_to :attraction
  belongs_to :user
  has_many :votes

  def reviewer
    author = {}
    author["id"] = object.user.id
    author["username"] = object.user.username
    return author
  end

  def votes
    return object.votes
  end

  def score
    score = 0
    object.votes.each do |vote|
      score += vote.value
    end
    return score
  end

  def location
    location = {}
    location["name"] = object.attraction.name
    location["image_url"] = object.attraction.image_url
    return location
  end
end
