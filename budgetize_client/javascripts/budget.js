class Budget{

    static all = []

    constructor(id, amount, user_id){
        this.id = id
        this.amount = amount
        this.user_id = user_id
    }

    static fetchBudget (){
        fetch(`${baseUrl}/users/${user_id}/budgets`)
        .then(resp => resp.json())
        .then(json => {
            let lastObj =  json[json.length -1]
            let budget = new Budget(lastObj.amount, lastObj.id, lastObj.user_id)
            // lastObj.expenses.forEach(expense => {
            //     new Expense(expense)
            // })
        })
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