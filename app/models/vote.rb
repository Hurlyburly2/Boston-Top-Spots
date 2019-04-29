class Vote < ApplicationRecord
  validates :value, presence: true, numericality: {less_than_or_equal_to: 1, greater_than_or_equal_to: -1}

  belongs_to :user
  belongs_to :review
end
