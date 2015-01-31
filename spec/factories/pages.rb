require 'Faker'

FactoryGirl.define do

  factory :page do
    title { Faker::Name.name }
    text Faker::Lorem.characters
    artist
  end

end
