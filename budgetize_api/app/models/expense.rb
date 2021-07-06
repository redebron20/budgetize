class Expense < ApplicationRecord
    belongs_to :budget

    validates :title, :amount, :presence => true
end
