# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20131214235008) do

  create_table "galaxies", :force => true do |t|
    t.string   "name",       :null => false
    t.integer  "radius"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "galaxies", ["name"], :name => "index_galaxies_on_name"

  create_table "planets", :force => true do |t|
    t.string   "name",                                 :null => false
    t.integer  "diameter",                             :null => false
    t.integer  "radius",                               :null => false
    t.integer  "orbit_duration"
    t.integer  "current_orbit"
    t.string   "orbit_type",     :default => "circle", :null => false
    t.datetime "created_at",                           :null => false
    t.datetime "updated_at",                           :null => false
    t.integer  "system_id"
  end

  add_index "planets", ["name"], :name => "index_planets_on_name"

  create_table "stars", :force => true do |t|
    t.string   "name",       :null => false
    t.integer  "mass",       :null => false
    t.integer  "diameter",   :null => false
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
    t.integer  "system_id"
  end

  add_index "stars", ["name"], :name => "index_stars_on_name"

  create_table "systems", :force => true do |t|
    t.string   "name",                                 :null => false
    t.integer  "diameter",                             :null => false
    t.integer  "radius",                               :null => false
    t.integer  "orbit_duration"
    t.integer  "current_orbit"
    t.string   "orbit_type",     :default => "circle", :null => false
    t.datetime "created_at",                           :null => false
    t.datetime "updated_at",                           :null => false
    t.integer  "galaxy_id"
  end

  add_index "systems", ["name"], :name => "index_systems_on_name"

end
