class MoviesController < ApplicationController
    before_action :find_movie, only: :show
    # skip_before_action :authenticate_user
  
    # GET '/movies'
    def index
      render json: Movie.all, status: :ok
    end
  
    # GET '/movies/:id'
    def show
      render json: @movie, status: :ok
    end
  
    private
  
    def find_movie
      @movie = Movie.find(params[:id])
    end
  end