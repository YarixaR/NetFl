# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


puts "Start seeding"

require 'faker'

User.destroy_all
Movie.destroy_all
Review.destroy_all

User.reset_pk_sequence
Movie.reset_pk_sequence
Review.reset_pk_sequence


# Creating Users

emails = ['hello@gmail.com', 'poketworld@gmail.com', 'movie@gmail.com']
avatars = ['https://i.pinimg.com/564x/3b/c8/78/3bc878dcaf0830af8a322117097bc39f.jpg',
  'https://i.pinimg.com/564x/4a/96/aa/4a96aa2357201c454bacf2119f690a89.jpg',
  'https://i.pinimg.com/564x/ed/ad/56/edad56cf2af777c392027c15d4d8dfc2.jpg']

3.times do
  User.create(
    name: Faker::Games::Pokemon.name,
    email: emails.sample,
    password: rand(1000..10000),
    avatar: avatars.sample
  )
end


# Creating Movies

types = ['movie', 'show']

10.times do
  Movie.create(
    title: Faker::JapaneseMedia::Naruto.character,
    image: Faker::Avatar.image,
    rating: rand(1..5),
    genre: types.sample,
    description: Faker::Movies::BackToTheFuture.quote,
    trailer: Faker::Avatar.image
  )
end


# Creating Reviews

movieIds = Movie.pluck(:id)
userIds = User.pluck(:id)

20.times do
  Review.create(
    rating: rand(1..5),
    comment: Faker::Movies::BackToTheFuture.quote,
    movie_id: movieIds.sample,
    user_id: userIds.sample
  )
end


puts "Seeding complete 🌼"
