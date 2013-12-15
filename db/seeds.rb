# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
ActiveRecord::Base.transaction do
	milky_way = Galaxy.create({ name:"Milky Way", radius:100 })

	terran = milky_way.systems.create({ name:"Terran", diameter:100, radius:1 })

	terran.star = Star.create({ name:"Sol", mass:40, diameter:10 })

	terran.planets.create({ name:"Mercury", diameter:2, radius:10, 
		orbit_duration:26, current_orbit:rand*26 })
	terran.planets.create({ name:"Earth", diameter:4, radius:30, 
		orbit_duration:42, current_orbit:rand*42 })
	terran.planets.create({ name:"Jupiter", diameter:8, radius:50, 
		orbit_duration:79, current_orbit:rand*79 })


	alpha_centauri = milky_way.systems.create({ name:"Alpha Centauri", diameter:100, radius:15 })

	alpha_centauri.star = Star.create({ name:"AC1", mass:40, diameter:10 })

	alpha_centauri.planets.create({ name:"AC2", diameter:6, radius:40, 
		orbit_duration:35, current_orbit:rand*35 })
	alpha_centauri.planets.create({ name:"AC3", diameter:4, radius:30, 
		orbit_duration:91, current_orbit:rand*91 })
	alpha_centauri.planets.create({ name:"AC4", diameter:3, radius:50, 
		orbit_duration:23, current_orbit:rand*23 })
end