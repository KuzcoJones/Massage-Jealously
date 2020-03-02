class ProvidersController < ApplicationController
    def index
        providers = Provider.all
        render json: providers
    end

    def show 
        provider = Provider.find_by[id: params[:id]]
    end
end
