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
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150107170814) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "annotations", force: true do |t|
    t.text     "content",    null: false
    t.integer  "page_id",    null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "artists", force: true do |t|
    t.text     "biography"
    t.string   "instagram_url"
    t.string   "twitter_url"
    t.string   "facebok_url"
    t.integer  "veried_account_id"
    t.string   "photo_url"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "collections", force: true do |t|
    t.string   "title",       null: false
    t.integer  "artist_id",   null: false
    t.string   "photo_url"
    t.text     "description"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "genres", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "name",       null: false
  end

  create_table "pages", force: true do |t|
    t.integer  "genre_id",                       null: false
    t.string   "title",                          null: false
    t.integer  "artist_id",                      null: false
    t.date     "release_date"
    t.string   "soundcloud_url"
    t.string   "youtube_url"
    t.integer  "collection_id"
    t.text     "text"
    t.boolean  "is_locked",      default: false
    t.integer  "description_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: true do |t|
    t.string   "username",                             null: false
    t.string   "password_digest",                      null: false
    t.string   "email",                                null: false
    t.string   "level",           default: "whitehat"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "session_token"
    t.text     "biography"
  end

  add_index "users", ["password_digest"], name: "index_users_on_password_digest", using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree

end
