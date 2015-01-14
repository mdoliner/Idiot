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

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render :show
    else
      render json: @user
    end
  end

  def logout
    current_user.try(:reset_session_token!)
    session[:session_token] = nil
    render json: current_user
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :email, :photo, :biography)
  end

end
