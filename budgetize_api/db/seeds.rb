# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# user1 = User.create(username: "test2, email: "test2@awesome.com")

# budgets = Budget.create([
#     {name: "Summer Vacation"},
#     {name: "Holiday"},
#     {name: "August 2021"}
# ])

user = User.create(username: "yourhighness", email: "yourhighness@ymail.com", password_digest: "yourhighness")

budget = Budget.create(name: "General Budget")
user.budgets << budget

transactions = [
  { name: "paycheck", amount: 1000, kind: "income" },
  { name: "paycheck", amount: 1300, kind: "income" },
  { name: "Camera", amount: 750, kind: "expense" },
  { name: "Grocery", amount: 50, kind: "expense" },
  { name: "Shopping", amount: 60, kind: "expense" },
  { name: "Flight ticket", amount: 350, kind: "expense"}
]

transactions.each do |t|
    budget.transactions.build(name: t[:name], amount: t[:amount], kind: t[:kind])
    budget.update_balance(t)
    budget.save
end