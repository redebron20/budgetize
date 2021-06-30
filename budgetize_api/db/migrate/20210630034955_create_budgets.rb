class CreateBudgets < ActiveRecord::Migration[6.1]
  def change
    create_table :budgets do |t|
      t.string :name
      t.float :income, :default => 0.0
      t.float :expense, :default => 0.0
      t.float :balance, :default => 0.0
      t.integer :user_id

      t.timestamps
    end
  end
end
