class MoviesController < ApplicationController
    before_action :find_movie, only: :show
    before_action :is_authorized?, only: :create
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  
    # GET '/movies'
    def index
      render json: Movie.all, status: :ok
    end
  
    # GET '/movies/:id'
    def show
      render json: @movie, status: :ok
    end

    # POST '/movies'
    def create
      movie = Movie.create!(movie_params)
      render json: movie, status: :created
    end
  
    private
  
    def find_movie
      @movie = Movie.find(params[:id])
    end

    def movie_params
      params.permit(:title, :image, :release_date, :description, :genre, :trailer)
    end

    def render_unprocessable_entity_response(exception)
      render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

  end
