class User < ApplicationRecord
    has_many :reviews
    has_many :movies, through: :reviews
  
    validates :email, uniqueness: true, presence: true
    
    has_secure_password
  end