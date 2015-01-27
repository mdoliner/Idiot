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
end
