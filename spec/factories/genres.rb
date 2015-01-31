FactoryGirl.define do
  factory :genre do
    name { Faker::Name.name }

    after(:create) do |genre, evaluator|
      create_list(:page, 10, genre: genre)
    end
  end
end
