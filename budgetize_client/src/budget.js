class Budget{

    static all = []
    static cashflowContainer = document.getElementById("cashflow-container")

    constructor(id, name, income, expense, balance, user_id){
        this.id = id
        this.name = name
        this.income = income
        this.expense = expense
        this.balance = balance
        this.user_id = user_id

        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = `budget-${this.id}`

        Budget.all.push(this)
    }

    cashflowHTML(){
        this.element.innerHTML += `
            <div>
                <h3>${this.name}</h3>
            </div>
        `
        return this.element
    }

    appendOnDOM(){
        Budget.cashflowContainer.appendChild(cashflowHTML())
    }

}