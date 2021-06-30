const base_url = "http://127.0.0.1:3000"
const budgetService = new BudgetService(base_url)

Budget.budgetForm.addEventListener('submit', handleSubmit)

budgetService.getBudgets()
Budget.renderForm()

function handleSubmit(event){
    event.preventDefault()
    budgetService.createBudget()
    event.target.reset()
}