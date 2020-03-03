# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Provider.destroy_all
Service.destroy_all

terri = Provider.create(name: 'Terri', bio: 'Chicago, deep tissue and sport therapist currently located in Rogers Park', profile_img: 'https://images.pexels.com/photos/952005/pexels-photo-952005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', specialties: 'Deep tissue, Sports Therapy, Cupping and Myofascial Release')

molly = Provider.create(name: 'Molly', bio: 'Mollyton, sport therapist currently located in Pilsen', profile_img: 'https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260', specialties: 'Sports Therapy')

john = Provider.create(name: 'John', bio: 'Chicago, currently located in Oak Park', profile_img: 'https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260', specialties: 'Swedish Massage')

deep_tissue = Service.create(name: 'Deep Tissue', description: 'Heavier Pressure, Steady Flow and Slow Pace', provider: terri)

sports_therapy = Service.create(name: 'Sports', description: 'Fast Paced, Sport based, Finish The Race', provider: molly
)

swedish = Service.create(name: 'Swedish', description: 'Slow and Relaxing, Most Common, Sleep without interruption', provider: john
)
