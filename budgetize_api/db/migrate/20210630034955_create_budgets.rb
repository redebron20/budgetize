class CreateBudgets < ActiveRecord::Migration[6.1]
  def change
    create_table :budgets do |t|
      t.string :name
      t.float :income
      t.float :expense
      t.float :balance
      t.integer :user_id

      t.timestamps
    end
  end
end
