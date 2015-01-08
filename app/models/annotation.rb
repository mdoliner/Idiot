class Annotation < ActiveRecord::Base
  validates :content, :page_id, :start_index, :end_index, presence: true

  belongs_to :page

end
