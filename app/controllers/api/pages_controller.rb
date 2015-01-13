class Api::PagesController < ApplicationController

  def new
    @genres = Genre.all
  end

  def create
    @page = Page.new(page_params)
    if @page.save
      render :show
    else
      render :new
    end
  end

  def index
    @pages = Page.all
    render :index
  end

  def show
    @page = Page.find(params[:id])
    render :show
  end

  def update
    @page = Page.find(params[:id])
    if @page.update(page_params)
      render :show
    else
      render json: @page
    end
  end

  private
  def page_params
    params.require(:page).permit(:genre_id,
    :title,
    :artist_id,
    :release_date,
    :soundcloud_url,
    :youtube_url,
    :collection_id,
    :text,
    :photo)
  end

end
