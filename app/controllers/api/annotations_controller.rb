class Api::AnnotationsController < ApplicationController

  def create
    @annotation = Annotation.new(annotation_params)
    @annotation.save!
    render :show
  end

  def show
    @annotation = Annotation.find(params[:id])
    render :show
  end

  private
  def annotation_params
    params.require(:annotation).permit(:content, :start_index, :end_index, :page_id)
  end

end
