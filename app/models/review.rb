class Review < ApplicationRecord
  belongs_to :user
  belongs_to :movie

  validates :comment, presence: true, length: {maximum: 100}
end