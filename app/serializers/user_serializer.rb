class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password, :avatar
end
