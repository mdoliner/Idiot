class Api::GenresController < ApplicationController

  def index
    @genres = Genre.all.includes(pages: [:artist, :annotations])
    render :index
  end

  def show
    @genre = Genre.find(params[:id])
    render :show
  end

  def header
    @genres = Genre.all.includes(:pages)
    render :header
  end

end
