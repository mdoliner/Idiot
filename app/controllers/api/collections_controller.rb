class Api::CollectionsController < ApplicationController

  def show
    @collection = Collection.find(params[:id])
    render :show
  end

  private
  def collection_params
    params.require(:collection).permit(:title, :artist_id, :photo, :release_year)
  end

end
