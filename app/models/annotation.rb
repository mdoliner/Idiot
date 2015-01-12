class Annotation < ActiveRecord::Base
  include Improvementable
  validates :content, :page_id, :start_index, :end_index, :username, presence: true

  belongs_to :page

end
