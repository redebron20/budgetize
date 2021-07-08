class BudgetService{
    constructor(endpoint){
        this.endpoint = endpoint
    }

    getBudgets(){
        fetch(`${this.endpoint}/budgets`)
        .then(resp => resp.json())
        .then(budgets => {
            for (const budget of budgets){
                const b = new Budget(budget)
                b.appendOnDOM()
            }
        })
    }

    createBudget(){
        const budget = {
            name: document.getElementById('name').value,
            user_id: 1
        }

        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(budget)
        }
        
        fetch(`${this.endpoint}/budgets`, configObj)
        .then(resp => resp.json())
        .then(budget => {
            const b = new Budget(budget)
                b.appendOnDOM()
        })
    }

    deleteBudget(id){
        fetch(`${this.endpoint}/budgets/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(json => alert(json.message))
    }
}