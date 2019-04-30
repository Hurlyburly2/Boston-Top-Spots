class Vote < ApplicationRecord
  validates :value, presence: true, numericality: {less_than_or_equal_to: 1, greater_than_or_equal_to: -1}
  validates_uniqueness_of :user_id, :scope => :review_id

  belongs_to :user
  belongs_to :review
end
