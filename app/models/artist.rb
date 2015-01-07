class Artist < ActiveRecord::Base
  validates :name, presence: true
  
  has_many :pages
  has_many :collections
end
