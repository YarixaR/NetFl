class ReviewsController < ApplicationController
    before_action :find_review, only: [:show, :update, :destroy]
    # skip_before_action :authenticate_user, except: [:index, :show]
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    
    # GET '/reviews'
    def index
      render json: Review.all, status: :ok
    end
  
    # GET '/reviews/:id'
    def show
      render json: @review, status: :ok
    end
  
    # POST '/reviews'
    def create
      review = Review.create!(review_params)
      render json: review, status: :created
    end
  
    # PATCH '/reviews/:id'
    def update
      @review.update!(review_params)
      render json: @review, status: :ok
    end
  
    # DELETE '/reviews/:id'
    def destroy
      @review.destroy
      head :no_content
    end
  
  
    private
  
    def find_review
      @review = Review.find(params[:id])
    end
  
    def review_params
      params.permit(:rating, :comment, :user_id, :movie_id)
    end
  
    def render_unprocessable_entity_response(exception)
      render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
  
  end