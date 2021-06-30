class CreateTransactions < ActiveRecord::Migration[6.1]
  def change
    create_table :transactions do |t|
      t.string :name
      t.string :kind
      t.float :amount
      t.integer :budget_id

      t.timestamps
    end
  end
end
