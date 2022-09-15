class User < ApplicationRecord
    has_many :reviews
    has_many :movies, through: :reviews
  
    validates :email, uniqueness: true, presence: true
    # validates :movies, uniqueness: true
    
    has_secure_password
  end