class Page < ActiveRecord::Base
  include Improvementable
  
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

end
