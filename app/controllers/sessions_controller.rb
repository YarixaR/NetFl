class SessionsController < ApplicationController
  skip_before_action :authenticate_user, except: :destroy

  # login
  def create
    user = User.find_by_email(params[:email])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :ok
    else 
      render json: { error: "Sorry, we can't find an account with this email and password." },
      status: :unauthorized
    end
  end

  # logout
  def destroy
    session.delete :user_id
  end
end
