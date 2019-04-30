class AttractionShowSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :address, :city, :state, :zip, :image_url

  has_many :reviews
end
