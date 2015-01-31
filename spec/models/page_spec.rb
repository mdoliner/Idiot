require 'rails_helper'

RSpec.describe Page, :type => :model do

  describe "validations" do
    it { should validate_presence_of("title") }
    it { should validate_presence_of("artist_id") }
    it { should validate_presence_of("text") }
    it { should validate_presence_of("genre_id") }
  end

  describe "associations" do
    it { should have_many("annotations") }
    it { should belong_to("artist") }
    it { should belong_to("genre") }
    it { should belong_to("collection") }
    it { should have_one("description") }
  end


end
