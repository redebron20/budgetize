class Expense {

    static all = []

    constructor(title, amount, id, budget_id) { 
        this.title = title;
        this.amount = amount;
        this.id = id;
        this.budget_id = budget_id;

        Expense.all.push(this)
    }

}