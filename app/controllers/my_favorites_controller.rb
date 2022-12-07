class MyFavoritesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    def index
        my_favorites = MyFavorite.all
        render json: my_favorites #, except: [:created_at, :updated_at]
    end

    def show
        my_favorite = find_my_favorite
        if my_favorite
            render json: my_favorite
        else
            render_not_found_response
        end
    end

    def create
        my_favorite = MyFavorite.create!(my_favorite_params)
        render json: my_favorite, status: :created
    end

    def update
        my_favorite = find_my_favorite
        if my_favorite
            my_favorite.update!(my_favorite_params)
            render json: my_favorite
        else
            render_not_found_response
        end
    end

    def destroy
        my_favorite = MyFavorite.find_by(id: params[:id])
        if my_favorite
            my_favorite.destroy
            head :no_content
        else
            render_not_found_response
        end
    end

    private
    def find_my_favorite
        MyFavorite.find_by(id: params[:id])
    end

    def my_favorite_params
        params.permit(:title, :description, :category, :image_url)
    end

    def render_not_found_response
        render json: { error: "Favorites card not found" }, status: :not_found
    end

    def render_unprocessable_entity_response(exception)
        render json: { error: exception.record.errors.full_messages }, status: :unprocessabe_entity
    end
end
