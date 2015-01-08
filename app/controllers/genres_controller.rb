class GenresController < ApplicationController

  def index
    @genres = Genre.all.includes(:pages)
    @most_recent_pages = []
  end

  def show
    @genre = Genre.find(params[:id])
  end

end
