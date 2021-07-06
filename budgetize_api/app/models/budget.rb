class Budget < ApplicationRecord
    belongs_to :user
    has_many :expenses, :dependent => :destroy

    validates :title, presence: true, uniqueness: true

    # def update_balance(transaction)
    #     if transaction[:kind].downcase == "income" 
    #       add_income(transaction)
    #     else
    #       add_expense(transaction)
    #     end
    # end

    # def update_balance_upon_delete(transaction)
    #     if transaction[:kind].downcase == "income" 
    #      subtract_income(transaction)
    #     else
    #       subtract_expense(transaction)
    #     end
    # end

    # def update_balance_upon_edit
    #     income_t = self.transactions.select { |t| t.kind == "income"}
    #     expense_t = self.transactions.select { |t| t.kind == "expense" }
    
    #     self.total_income = income_t.reduce(0) { |sum, t| sum + t.amount }
    #     self.total_expense = expense_t.reduce(0) { |sum, t| sum + t.amount }
    
    #     self.balance = self.total_income - self.total_expense
    # end

    # private
    # def add_income(transaction)
    #     self.total_income += transaction[:amount]
    #     self.balance += transaction[:amount]
    # end

    # def subtract_income(transaction)
    #     self.total_income -= transaction[:amount]
    #     self.balance -= transaction[:amount]
    # end
    
    # def add_expense(transaction)
    #     self.total_expense += transaction[:amount]
    #     self.balance -= transaction[:amount]
    # end
    
    # def subtract_expense(transaction)
    #     self.total_expense -= transaction[:amount]
    #     self.balance += transaction[:amount]
    # end

end
