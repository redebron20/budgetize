class ExpenseService{
    constructor(endpoint){
        this.endpoint = endpoint
    }

    getExpenses(){
        fetch(`${this.endpoint}/expenses`)
        .then(resp => resp.json())
        .then(expenses => {
            for (const expense of expenses){
                const b = new Expense(expense)
                b.appendOnDOM()
            }
        })
    }

    createExpense(){
        const expense = {
            title: document.getElementById('title').value,
            user_id: 1
        }

        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(expense)
        }
        
        fetch(`${this.endpoint}/expenses`, configObj)
        .then(resp => resp.json())
        .then(expense => {
            const b = new Expense(expense)
                b.appendOnDOM()
        })
    }

    deleteexpense(id){
        fetch(`${this.endpoint}/expenses/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(json => alert(json.message))
    }
}