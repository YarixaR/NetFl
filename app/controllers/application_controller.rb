class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

  private

  def record_not_found(not_found)
      render json: { error: "#{not_found.model} not found"}, status: :not_found
  end
end
