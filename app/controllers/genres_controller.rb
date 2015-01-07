class GenresController < ApplicationController

  def index
    @genres = Genre.all.includes(:pages)
    @most_recent_pages = []
  end

  def show
    @genre = Genre.find(params[:id])
    @recent_pages = @genre.pages.order(:created_at).reverse_order.limit(5)
  end

end
