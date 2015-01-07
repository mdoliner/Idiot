class UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      redirect_to user_url(@user)
    else
      flash.now[:errors] = @user.errors.full_messages
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end

end