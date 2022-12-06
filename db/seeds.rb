# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts 'Seeding...'

MyFavorite.create!(title: "The Hobbit", description: "Science Fiction Book", type: 'book', image_url: 'https://images.moviesanywhere.com/fb126b56f7bb25c3793cb45572eec84d/d7270ab5-1eef-4036-8860-5081e161926b.jpg')
MyFavorite.create!(title: "Porsche Cayenne", description: "Luxury SUV", type: 'car', image_url: 'https://www.cnet.com/a/img/resize/c22eba87138f2e56b7e9eae4753d27f691237eac/hub/2021/06/07/6b177b45-f084-4430-81c3-ade3e51abdc8/ogi1-2021-porsche-cayenne-gts-015.jpg?auto=webp&fit=crop&height=1200&width=1200')
MyFavorite.create!(title: 'Cape Town', description: "World's most beautiful city", type: 'city', image_url: 'https://www.andbeyond.com/wp-content/uploads/sites/5/cape-town-aerial-view-greenpoint-stadium.jpg')
MyFavorite.create!(title: 'Ruby', description: 'Cool programming language', type: 'language', image_url: 'https://www.pngitem.com/pimgs/m/12-120179_best-free-ruby-png-ruby-programming-language-logo.png')


puts 'Done seeding!!'