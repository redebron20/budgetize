class BudgetSerializer < ActiveModel::Serializer
    attributes :amount, :id, :user_id
    
    has_many :expenses, except: [:created_at, :updated_at]
end