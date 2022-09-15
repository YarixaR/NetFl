class Review < ApplicationRecord
  belongs_to :user
  belongs_to :movie

  validates :comment, presence: true, length: {maximum: 100}
  validates :rating, numericality: {greater_than: 0, less_than_or_equal_to: 5}
  # validates :user, uniqueness: {scope: :movie}
end
