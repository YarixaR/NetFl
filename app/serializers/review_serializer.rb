class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :comment, :user_id, :movie_id
  # has_one :user
  # has_one :movie
end
