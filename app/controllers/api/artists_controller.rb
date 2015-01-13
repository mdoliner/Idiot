class Api::ArtistsController < ApplicationController

  def index
    @artists = Artist.all
    render :index
  end

  def show
    @artist = Artist.find(params[:id])
    render :show
  end

  def update
    @artist = Artist.find(params[:id])
    if @artist.update(artist_params)
      render :show
    else
      render json: @artist
    end
  end

  private
  def artist_params
    params.require(:artist).permit(:photo, :biography, :name)
  end
end
