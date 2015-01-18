class Api::ArtistsController < ApplicationController

  def index
    @artists = Artist.all
    render :index
  end

  def create
    @artist = Artist.new(artist_params)
    if @artist.save
      render :show
    else
      render json: @artist, status: :unprocessable_entity
    end
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
      render json: @artist, status: :unprocessable_entity
    end
  end

  def destroy
    @artist = Artist.find(params[:id])
    @artist.destroy!
    render json: @artist
  end

  private
  def artist_params
    params.require(:artist).permit(:photo, :biography, :name)
  end
end
