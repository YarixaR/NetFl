class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password, :avatar

  has_many :reviews
  has_many :movies
end
