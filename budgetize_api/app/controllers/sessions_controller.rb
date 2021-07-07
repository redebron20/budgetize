class SessionsController < ApplicationController 
    def create
        user = User.find_by(:email => params[:email])
        
        if user && user.authenticate(params[:password])
            render :json => user, :only => [:id, :email]
        else 
            render :json => { errors: 'Invalid email or password' }, status: :unauthorized
        end 
    end 

    private
    def login_params
        params.permit(:email, :password)
    end
    
end 