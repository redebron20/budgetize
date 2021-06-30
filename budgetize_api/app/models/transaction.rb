class Transaction < ApplicationRecord
    belongs_to :budget

    validates :name, :amount, :presence => true
end
