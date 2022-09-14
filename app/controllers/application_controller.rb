class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authenticate_user
  
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

  private

  def record_not_found(not_found)
    render json: { error: "#{not_found.model} not found"}, status: :not_found
  end

  def current_user 
    @current_user ||= User.find_by_id(session[:user_id])
  end

  def authenticate_user
    render json: { error: "Not Authorized" }, status: :unauthorized unless current_user
  end

  def is_authorized?
    permitted = current_user.admin?
    render json: {errors: {User: "does not have admin permission"}}, status: :forbidden unless permitted
  end

end
