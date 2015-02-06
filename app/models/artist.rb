class Artist < ActiveRecord::Base
  validates :name, presence: true
  has_attached_file :photo, styles: {
    thumb: '100x100>',
    square: '200x200#',
    medium: '300x300>'
  }
  validates_attachment_content_type :photo, :content_type => /\Aimage\/.*\Z/

  has_many :pages, dependent: :destroy
  has_many :collections, dependent: :destroy

  def image_url
    if self.photo.url == "/photos/original/missing.png"
      artist = RSpotify::Artist.search(self.name).first
      return "/photos/original/blank.png" if !artist || artist.images.empty?
      self.photo = artist.images.first["url"]
      self.save!
    end
    self.photo.url
  end
end
