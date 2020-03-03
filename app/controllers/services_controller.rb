class ServicesController < ApplicationController
    def index
        services = Service.all 
        render json: services
    end

    def show 
        service = Service.find_by(id: params[:id])
        render json: service.slice(:id, :description, :provider)
    end

    def create
        service = Service.create(service_params)
        render json: service
    end

    def update 
        service = Service.find_by(id: params[:id])
        service.update(service_params)
        render json: service
    end

    def delete
        service = Service.find_by(id: params[:id])
        service.destroy
    end

    private
    def service_params
        params.require(:service).permit(:name, :description, :provider_id)
    end
end
