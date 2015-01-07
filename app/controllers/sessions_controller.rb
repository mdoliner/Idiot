class SessionsController < ApplicationController

  def new
  end

  def create
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if user
      login!(user)
      redirect_to user_url(user)
    else
      flash.now[:error] = "Username/Password Combination Incorrect"
    end
  end

  def destroy
    current_user.try(:reset_session_token!)
    session[:session_token] = nil
    redirect_to root_url
  end

end
