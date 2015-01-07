class PagesController < ApplicationController

  def index
    @pages = Page.where(genre: params[:genre])
  end

  def show
    @page = Page.find(params[:id])
  end

end
