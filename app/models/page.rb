class Page < ActiveRecord::Base
  include Improvementable

  has_attached_file :photo, styles: {
    thumb: '100x100>',
    square: '200x200#',
    medium: '300x300>'
  }
  validates_attachment_content_type :photo, :content_type => /\Aimage\/.*\Z/

  validates :genre_id, :title, :artist_id, presence: true

  belongs_to :genre
  belongs_to :collection
  belongs_to :artist
  has_many :annotations
  has_one(
    :description,
    class_name: "Annotation",
    foreign_key: :id,
    primary_key: :description_id
  )

  def spotify_uri
    tracks = RSpotify::Track.search(self.title)
    tracks.each do |track|
      track.artists.each do |artist|
        if artist.name == self.artist.name
          return track.uri
        end
      end
    end
    nil
  end

end
