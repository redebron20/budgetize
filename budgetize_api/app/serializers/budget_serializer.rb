class BudgetSerializer < ActiveModel::Serializer
    attributes :amount, :expense, :balance, :id
    
    has_many :expenses, except: [:created_at, :updated_at]
end