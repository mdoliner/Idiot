class Artist < ActiveRecord::Base
  has_many :pages
  has_many :collections
end
