class Artist < ActiveRecord::Base
  validates :name, presence: true
  has_attached_file :phtoo, styles: {
    thumb: '100x100>',
    square: '200x200#',
    medium: '300x300>'
  }
  validates_attachment_content_type :phtoo, :content_type => /\Aimage\/.*\Z/

  has_many :pages
  has_many :collections
end
