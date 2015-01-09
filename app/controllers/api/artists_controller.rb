class Api::ArtistsController < ApplicationController

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
    params.require(:artist).permit(:avatar, :biography, :name)
  end
end
