# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

Provider.destroy_all
Service.destroy_all

terri = Provider.create(name: 'Terri', bio: 'Chicago, deep tissue and sport therapist currently located in Rogers Park', profile_img: 'https://images.pexels.com/photos/952005/pexels-photo-952005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', specialty: 'Deep tissue')

molly = Provider.create(name: 'Molly', bio: 'Mollyton, sport therapist currently located in Pilsen', profile_img: 'https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260', specialty: 'Sports Therapy')

john = Provider.create(name: 'John', bio: 'Chicago, currently located in Oak Park', profile_img: 'https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260', specialty: 'Swedish Massage')

deep_tissue = Service.create(name: 'Deep Tissue', description: 'Heavier Pressure, Steady Flow and Slow Pace', provider_id: 3)

sports_therapy = Service.create(name: 'Sports', description: 'Fast Paced, Sport based, Finish The Race', provider_id: 2
)

swedish = Service.create(name: 'Swedish', description: 'Slow and Relaxing, Most Common, Sleep without interruption', provider_id: 1)

freddie = Provider.create(name: 'Freddie', bio: Faker::Hipster.paragraph, profile_img: 'https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260', specialty: 'Chair Massage')

robert = Provider.create(name: 'Robert', bio: Faker::Hipster.paragraph, profile_img: 'https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260', specialty: 'Swedish')

kelly = Provider.create(name: 'Kelly', bio: Faker::Hipster.paragraph, profile_img: 'https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260', specialty: 'Trigger Point')

lily = Provider.create(name: 'Lily', bio: Faker::Hipster.paragraph, profile_img: 'https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260', specialty: 'Swedish')

barbara = Provider.create(name: 'Barbara', bio: Faker::Hipster.paragraph, profile_img: 'https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260', specialty: 'Hot Stone')

stephanie = Provider.create(name: 'Stephanie', bio: Faker::Hipster.paragraph, profile_img: 'https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260', specialty: 'Thai')

donna = Provider.create(name: 'Donna', bio: Faker::Hipster.paragraph, profile_img: 'https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260', specialty: 'Thai')









