class GenresController < ApplicationController

  def index
    @genres = Genre.all.includes(pages: [:artist, :annotations])
  end

  def show
    @genre = Genre.find(params[:id])
  end

end
