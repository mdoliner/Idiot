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

  def spotify_track
    tracks = RSpotify::Track.search(self.title)
    tracks.each do |track|
      track.artists.each do |artist|
        if artist.name == self.artist.name
          return track
        end
      end
    end
    nil
  end

  def spotify_uri
    track = self.spotify_track
    return nil unless track
    track.uri
  end

  def image_url
    if self.photo.url == "/photos/original/missing.png"
      track = self.spotify_track
      return "/photos/original/blank.png" if !track
      self.photo = track.album.images.first["url"]
      self.save!
    end
    self.photo.url
  end

end
