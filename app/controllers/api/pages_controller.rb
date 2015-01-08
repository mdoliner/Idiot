class Api::PagesController < ApplicationController

  def new
    @genres = Genre.all
  end

  def create
    @page = Page.new(page_params)
    if @page.save
      render :show
    else
      flash.now[:errors] = @page.errors.full_messages
      render :new
    end
  end

  def index
    @genre = Genre.find_by(id: params[:genre_id])
    @pages = @genre.pages.order(:created_at).reverse_order
  end

  def show
    @page = Page.find(params[:id])
    render :show
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
    :text)
  end

end
