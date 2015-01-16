class Api::CollectionsController < ApplicationController

  def create
    @collection = Collection.new(collection_params)
    if @collection.save
      render :show
    else
      render json: @collection, status: :unprocessable_entity
    end
  end

  def update
    @collection = Collection.find(params[:id])
    if @collection.update(collection_params)
      render :show
    else
      render json: @collection
    end
  end

  def show
    @collection = Collection.find(params[:id])
    render :show
  end

  def destroy
    @collection = Collection.find(params[:id])
    @collection.destroy
    render json: @collection
  end

  private
  def collection_params
    params.require(:collection).permit(:title, :artist_id, :photo, :release_year)
  end

end
