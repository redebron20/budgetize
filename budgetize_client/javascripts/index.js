document.addEventListener('DOMContentLoaded', () =>{
    console.log("DOM HAS LOADED!!!");

const base_url = "http://127.0.0.1:3000"
// const userService = new userService(base_url)
const budgetService = new BudgetService(base_url)


UserService.loginUser()
UserService.createUser()

 

Budget.budgetForm.addEventListener('submit', handleSubmit)

budgetService.getBudgets()
Budget.renderForm()

function handleSubmit(event){
    event.preventDefault()
    budgetService.createBudget()
    event.target.reset()
}


})