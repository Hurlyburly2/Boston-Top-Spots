class User < ApplicationRecord
  has_many :reviews
  has_many :attractions
<<<<<<< HEAD
=======
  has_many :votes
>>>>>>> 7a34ceacbaac832a228f7143b4de61f36f587918
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  validates :username, presence: true, uniqueness: true

  mount_uploader :profile_photo, ProfilePhotoUploader

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
