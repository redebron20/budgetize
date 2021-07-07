class UsersController < ApplicationController

  skip_before_action :authorized, only: [:create]

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  def profile
    # using current_user helper in ApplicationController
    render json: { user: UserSerializer.new(current_user) }, status: :accepted
  end
  
  def create
    @user = User.create(user_params)
    if @user.valid?
      # passing  encode_token a payload of user id
      @token = encode_token(user_id: @user.id)
      # byebug
      # using built-in rails status codes
      render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created
    else
      render json: { error: 'failed to create user' }, status: :not_acceptable
    end
  end
    
    private

    def user_params
      params.require(:user).permit(:email, :password)
    end
end
