class User < ApplicationRecord
  has_many :reviews
  has_many :attractions
  has_many :votes

  validates :username, presence: true, uniqueness: true
  mount_uploader :profile_photo, ProfilePhotoUploader
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
