class ProvidersController < ApplicationController
    def index
        providers = Provider.all
        render json: providers, include: [:services], except: [:updated_at, :created_at]
    end

    def show 
        provider = Provider.find_by(id: params[:id])
        render json: provider, include: :services
    end

    def new 
    end

    def create 
     
    end


    def edit 
    end

    def update 
    end

end
