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
end
