class Genre < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true

  has_many :pages

  def most_recent_page
    pages = self.pages
    pages = pages.to_a
    pages = pages.sort_by(&:created_at)
    page = pages.last
  end

  def recent_pages
    self.pages.order(:created_at).reverse_order.limit(5)
  end

end
