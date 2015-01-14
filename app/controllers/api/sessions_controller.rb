class Api::SessionsController < ApplicationController

  def create
    user = User.find_by_credentials(
    params[:user][:username],
    params[:user][:password]
    )

    if user
      login!(user)
      render json: user
    else
      render json: user, status: :unprocessable_entity
    end
  end

  def destroy
    current_user.try(:reset_session_token!)
    session[:session_token] = nil
    render json: current_user
  end

end
