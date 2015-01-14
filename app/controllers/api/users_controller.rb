class Api::UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
    render :show
  end

  def current
    @user = current_user
    render :current
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :current
    else
      render json: @user
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :email)
  end

end
