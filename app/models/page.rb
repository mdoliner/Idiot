class Page < ActiveRecord::Base
  validates :genre_id, :title, :artist_id, presence: true

  belongs_to :genre
  has_many :annotations

end
