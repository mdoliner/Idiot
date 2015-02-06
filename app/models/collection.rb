class Collection < ActiveRecord::Base
  validates :artist_id, :title, presence: true
  has_attached_file :photo, styles: {
    thumb: '100x100>',
    square: '200x200#',
    medium: '300x300>'
  }
  validates_attachment_content_type :photo, :content_type => /\Aimage\/.*\Z/

  belongs_to :artist
  has_many :pages

def spotify_album
  albums = RSpotify::Album.search(self.title)
  albums.each do |album|
    album.artists.each do |artist|
      if artist.name == self.artist.name
        return album
      end
    end
  end
  nil
end

def image_url
  if self.photo.url == "/photos/original/missing.png"
    album = self.spotify_album
    return "/photos/original/blank.png" if !album || album.images.empty?
    self.photo = album.images.first["url"]
    self.save!
  end
  self.photo.url
end
end
