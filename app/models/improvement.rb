class Improvement < ActiveRecord::Base
  validates :content, :author_id, :improvementable_id, :improvementable_type,  :username, presence: true

  belongs_to(
    :author,
    class_name: "User",
    foreign_key: :author_id
  )

end
