class Collection < ActiveRecord::Base
  validates :artist_id, :title, presence: true

  belongs_to :artist
  has_many :pages
end
