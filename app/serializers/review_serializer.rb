class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :body, :reviewer

  belongs_to :attraction
  belongs_to :user

  def reviewer
    author = {}
    author["id"] = object.user.id
    author["username"] = object.user.username
    return author
  end
end
