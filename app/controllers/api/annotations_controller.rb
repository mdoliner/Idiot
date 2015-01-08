class Api::AnnotationsController < ApplicationController

  def show
    @annotation = Annotation.find(params[:id])
    render :show
  end

end
