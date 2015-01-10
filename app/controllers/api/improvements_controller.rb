class Api::ImprovementsController < ApplicationController

  def create
    @improvement = Improvement.new(improvement_params)
    if @improvement.save
      render :show
    else
      render json: @improvement
    end
  end

  private
  def improvement_params
    params.require(:improvement).permit(:author_id, :content, :improvementable_type, :improvementable_id, :username)
  end

end
