class Budget{

    static all = []
    static budgetsContainer = document.getElementById("budgets-container")
    static budgetForm = document.getElementById("budget-form")
    static budgetFeedback = document.querySelector(".budget-feedback")

    constructor({budget, expense, expenses = []}){
        this.id = id
        this.amount = budget
        this.expense = expense
        this.balance = balance
        this.user_id = user_id

        // this.element = document.createElement("li")
        // this.element.dataset.id = this.id
        // this.element.id = `budget-${this.id}`
        // this.element.addEventListener('click', this.handleClick)

    }

    // static addBudget(){
    //     Budget.budgetForm.innerHTML += `
    //     <form id="budget-form" class=" budget-form">
    //                 <h5 class="text-capitalize">enter your budget</h5>
    //                 <div class="form-group">
    //                     Title:<input type="text" class="form-control budget-title" id="budget-title">
    //                    </div>
    //                 <div class="form-group">
    //                     Amount:<input type="number" class="form-control budget-input" id="budget-input">
    //                 </div>
    //                 <!-- submit button -->
    //                 <button type="submit" class="btn text-capitalize budget-submit" id="budget-submit">calculate</button>
    //     </form>
    //     `
    // }

    // handleClick = () => {
    //     if (event.target.innerText === 'Delete'){
    //         this.element.remove()
    //         budgetService.deleteBudget(this.id)
    //     }
    // }

    // findExpenses (){
    //     Expense.all.filter(expense => expense.budget_id === this.id)
    // }

}