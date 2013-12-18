# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
ActiveRecord::Base.transaction do
	milky_way = Galaxy.create({ name:"Milky Way", orbit_radius:100 })

	terran = milky_way.systems.create({ name:"Terran", diameter:100, orbit_radius:100,
		orbit_duration:300, current_orbit:rand*300 })

	terran.star = Star.create({ name:"Sol", mass:40, diameter:10 })

	terran.planets.create({ name:"Mercury", diameter:2, orbit_radius:10, 
		orbit_duration:26, current_orbit:rand*26 })
	terran.planets.create({ name:"Earth", diameter:4, orbit_radius:30, 
		orbit_duration:42, current_orbit:rand*42 })
	terran.planets.create({ name:"Jupiter", diameter:8, orbit_radius:50, 
		orbit_duration:79, current_orbit:rand*79 })


	alpha_centauri = milky_way.systems.create({ name:"Alpha Centauri", diameter:100, 
		orbit_radius:200, orbit_duration:1000, current_orbit:rand*1000 })

	alpha_centauri.star = Star.create({ name:"AC1", mass:40, diameter:10 })

	alpha_centauri.planets.create({ name:"AC2", diameter:6, orbit_radius:40, 
		orbit_duration:35, current_orbit:rand*35 })
	alpha_centauri.planets.create({ name:"AC3", diameter:4, orbit_radius:30, 
		orbit_duration:91, current_orbit:rand*91 })
	alpha_centauri.planets.create({ name:"AC4", diameter:3, orbit_radius:50, 
		orbit_duration:23, current_orbit:rand*23 })
end