class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :rating, :description, :genre, :trailer
end
