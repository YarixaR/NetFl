class UsersController < ApplicationController
  skip_before_action :authenticate_user, except: :show

    # Making a new account
    def create
      byebug
      user = User.create!(user_params)
      session[:user_id] = user.id
      render json: user, status: :ok
    end

    # Show personal info
    def show
      if current_user
        render json: current_user, status: :ok
      else
        render json: "No current session stored", status: :unauthorized
      end
    end    

    private

    def user_params
      params.permit(:name, :email, :password, :avatar)
    end
end
