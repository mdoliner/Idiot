class SessionController < ApplicationController

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
    user = User.find(params[:id])
    user.try(:reset_session_token!)
    session[:session_token] = nil
    redirect_to root_url
  end

end
