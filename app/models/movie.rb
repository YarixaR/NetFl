class Movie < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews

    validates :title, :image, :release_date, :description, :genre, presence: true
    validates :title, uniqueness: true
    validates :genre, inclusion: {in: %w(movie show)}
  end
  

