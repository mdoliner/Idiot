FactoryGirl.define do

  factory :page do
    title { Faker::Name.name }
    artist
  end

end
