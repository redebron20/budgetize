class Budget{

    static all = []

    constructor(amount, id, user_id){
        this.amount = amount
        this.id = id
        this.user_id = user_id
    }

    static fetchBudget (){
        fetch(`${baseUrl}/users/${user_id}/budgets`)
        .then(resp => resp.json())
        .then(json => {
            let lastObj =  json[json.length -1];
            let budgetObj = new Budget(lastObj.amount, lastObj.id, lastObj.user_id);
            budget.textContent = budgetObj.amount;
            lastObj.expenses.forEach(expense => {
                new Expense(expense)
            })
        })
    }

    // findExpenses (){
    //     Expense.all.filter(expense => expense.budget_id === this.id)
    // }

}