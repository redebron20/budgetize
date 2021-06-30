class BudgetsController < ApplicationController
  before_action :set_budget, only: [:show, :update, :destroy]

  # GET /budgets
  def index
    @budgets = Budget.all

    render json: @budgets
  end

  # GET /budgets/1
  def show
    render json: @budget
  end

  # POST /budgets
  def create
    @budget = Budget.new(budget_params)

    if @budget.save
      render json: @budget, status: :created, location: @budget
    else
      render json: @budget.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /budgets/1
  def update
    if @budget.update(budget_params)
      render json: @budget
    else
      render json: @budget.errors, status: :unprocessable_entity
    end
  end

  # DELETE /budgets/1
  def destroy
    @budget.destroy
    render json: {message: 'Budget successfully deleted.'}
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_budget
      @budget = Budget.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def budget_params
      params.require(:budget).permit(:name, :income, :expense, :balance, :user_id)
    end
end
