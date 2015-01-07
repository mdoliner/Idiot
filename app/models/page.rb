class Page < ActiveRecord::Base
  validates :genre_id, :title, :artist_id, presence: true

  belongs_to :genre
  belongs_to :collection
  belongs_to :artist
  has_many :annotations

end
