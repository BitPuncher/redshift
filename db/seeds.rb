# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
ActiveRecord::Base.transaction do
	terran = System.create({ name:"Terran", diameter:100, radius:1 })

	terran.star = Star.create({ name:"Sol", mass:40, diameter:10 })

	terran.planets.create({ name:"Mercury", diameter:2, radius:20 })
	terran.planets.create({ name:"Earth", diameter:4, radius:40 })
	terran.planets.create({ name:"Jupiter", diameter:8, radius:80 })
end