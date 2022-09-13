class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :release_date, :description, :genre, :trailer
end
