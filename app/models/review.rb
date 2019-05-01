class Review < ApplicationRecord
  validates :body, presence: true
  validates :rating, presence: true, numericality: { less_than_or_equal_to: 5, greater_than_or_equal_to: 0 }

  belongs_to :user
  has_many :votes
  belongs_to :attraction

  def get_score
    score = 0
    review.votes each do |vote|
      score += vote.value
    end
    score
  end
end
