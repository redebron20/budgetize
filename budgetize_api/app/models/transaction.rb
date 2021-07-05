class Transaction < ApplicationRecord
    belongs_to :budget

    validates :name, :amount, :kind, :presence => true
    validates :kind, inclusion: { in: %w(income expense), message: "Kind must be income or expense" }
end
