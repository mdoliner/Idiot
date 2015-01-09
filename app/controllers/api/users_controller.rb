class Api::UsersController < ApplicationController

  def current
    @user = current_user
    render :current
  end

  private
  def annotation_params
    params.require(:annotation).permit(:content, :start_index, :end_index, :page_id)
  end

end
