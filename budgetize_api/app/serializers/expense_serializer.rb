class BudgetSerializer < ActiveModel::Serializer
    attributes :title, :amount, :id, :budget_id
    
    belongs_to :budget, except: [:created_at, :updated_at]
end