class AttractionShowSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :address, :city, :state, :zip
end
