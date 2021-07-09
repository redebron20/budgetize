class CreateBudgets < ActiveRecord::Migration[6.1]
  def change
    create_table :budgets do |t|
      t.string :title
      t.float :amount, :default => 0.0
      t.integer :user_id

      t.timestamps
    end
  end
end
