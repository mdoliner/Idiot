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

  def update
    @annotation = Annotation.find(params[:id])
    if @annotation.update(annotation_params)
      render :show
    else
      render @annotation, status: :unproccesable_entity
    end
  end

  private
  def annotation_params
    params.require(:annotation).permit(:content, :start_index, :end_index, :page_id)
  end

end
