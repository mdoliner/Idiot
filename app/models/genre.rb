class Genre < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true

  has_many :pages

  def most_recent_page
    self.pages.order(:created_at).last
  end

end
