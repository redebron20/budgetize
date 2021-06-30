class BudgetService{
    constructor(endpoint){
        this.endpoint = endpoint
    }

    getBudgets(){
        fetch(`${this.endpoint}/budgets`)
        .then(resp => resp.json())
        .then(budgets => {
            debugger
        })
    }
}