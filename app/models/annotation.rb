class Annotation < ActiveRecord::Base
  validates :content, :page_id, presence: true

  belongs_to :page

end
