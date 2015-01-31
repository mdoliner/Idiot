require 'rails_helper'

RSpec.describe Genre, :type => :model do

  describe "validations" do
    it { should validate_presence_of(:name) }
    it { should validate_uniqueness_of(:name) }
  end

  describe "associations" do
    it { should have_many(:pages) }
  end

  describe "recent pages" do
    it "should return the five most recent pages" do
      expect(create(:genre).recent_pages.length).to eq(5)
    end
    it "should return the most recent page" do
      expect(create(:genre).most_recent_page).to be_instance_of(Page)
    end
  end
end
