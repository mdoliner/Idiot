class GenresController < ApplicationController

  def index
    @genres = Genre.all
  end

  def show
    @genre = Genre.find(params[:id]).includes(:pages)
    @recent_pages = @genres.pages.reverse_order(:created_at).limit(5)
  end

end
