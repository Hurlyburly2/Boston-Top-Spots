class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :body, :reviewer, :location

  belongs_to :attraction
  belongs_to :user

  def reviewer
    author = {}
    author["id"] = object.user.id
    author["username"] = object.user.username
    return author
  end

  def location
    location = {}
    location["name"] = object.attraction.name
    location["image_url"] = object.attraction.image_url
    return location
  end
end
