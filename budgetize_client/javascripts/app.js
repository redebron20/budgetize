class App {

    constructor() {
      this.budgetFeedback = document.querySelector(".budget-feedback");
      this.expenseFeedback = document.querySelector(".expense-feedback");
      this.budgetForm = document.getElementById("budget-form");
      //this.budgetTitle = document.getElementById("budget-title");
      this.budgetInput = document.getElementById("budget-input");
      this.budget = document.getElementById("budget-amount");
      this.expense = document.getElementById("expense-amount");
      this.balance = document.getElementById("balance");
      this.balanceAmount = document.getElementById("balance-amount");
      this.expenseForm = document.getElementById("expense-form");
      this.expenseInput = document.getElementById("expense-input");
      this.amountInput = document.getElementById("amount-input");
      this.expenseList = document.getElementById("expense-list");
      this.itemList = [];
      this.itemID = 0;
    }
    
    submitBudgetForm(){
        let budgetAmount = this.budgetInput.value;

        const budgetData = {
            amount: budgetAmount,
            user_id: user_id
        }

        if(budgetAmount ==='' || budgetAmount < 0){
            this.budgetFeedback.classList.add('showItem')
            this.budgetFeedback.innerHTML = `<p>value cannot be negative or empty</p>`;
            const self = this;
            setTimeout(function(){
                self.budgetFeedback.classList.remove('showItem')
            }, 5000);
        }
        else{
            fetch(`${baseUrl}/users/${user_id}/budgets`, {
              method: "POST",
              headers: {"Content-Type": "application/json"},
              body: JSON.stringify(budgetData)
            })
            .then(response => response.json())
            .then(json => {
                let budgetObj = new Budget(json.amount, json.id, json.user_id)
                budget_id = budgetObj.id
            })
            this.budget.textContent = budgetAmount;
            //this.budgetTitle.value = '';
            this.budgetInput.value = '';
            this.showBalanceTotal();
        }
    }

    showBalanceTotal(){
        const expense = this.totalExpense();
        const balanceTotal = parseInt(this.budget.textContent) - expense;
        this.balanceAmount.textContent = balanceTotal;
        if(balanceTotal < 0){
            this.balance.classList.remove('showGreen', 'showBlack');
            this.balance.classList.add('showRed');
        }
        else if(balanceTotal > 0){
            this.balance.classList.remove('showRed', 'showBlack');
            this.balance.classList.add('showGreen');
        }

        else if(balanceTotal === 0){
            this.balance.classList.remove('showRed', 'showGreen');
            this.balance.classList.add('showBlack')
        }
    }

    submitExpenseForm(){
        const expenseValue = this.expenseInput.value;
        const amountValue = this.amountInput.value;

        if(expenseValue === '' || amountValue === '' || amountValue < 0){
            this.expenseFeedback.classList.add('showItem');
            this.expenseFeedback.innerHTML = `<p>values cannot be negative or empty</p>`
            const self = this;
            setTimeout(function(){
                this.expenseFeedback.classList.remove('showItem');           
            }, 5000);
        }
        else{
            let amount = parseInt(amountValue);
            this.expenseInput.value = '';
            this.amountInput.value = '';

            let expenseData = {
                id:this.itemID,
                title:expenseValue,
                amount:amount,
            }

            let data = {
                title:expenseValue,
                amount:amount,
                budget_id             
            }

            fetch(`${baseUrl}/users/${user_id}/budgets/${budget_id}/expenses`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data)
                })
                .then(response => response.json())
                .then(json => {
                    let expenseObj = new Expense(json.title, json.amount, json.id, json.budget_id)
              })
            this.itemID++;
            this.itemList.push(expenseData);
            this.addExpense(expenseData);
            this.showBalanceTotal();
        }
    }

    addExpense(expense){
        const div = document.createElement('div');
        div.classList.add('expense');
        div.innerHTML = `
            <div class="expense-item d-flex justify-content-between align-items-baseline">
                <h6 class="expense-title mb-0 text-uppercase list-item">- ${expense.title}</h6>
                <h5 class="expense-amount mb-0 list-item">$ ${expense.amount}</h5>
                <div class="expense-icons list-item">
                    <a href="#" class="edit-icon mx-2" data-id="${expense.id}">
                        <i class="fas fa-edit"></i>
                    </a>
                    <a href="#" class="delete-icon" data-id="${expense.id}">
                        <i class="fas fa-trash"></i>
                    </a>
                </div>
            </div>
        `;
        this.expenseList.appendChild(div);
    }

    totalExpense(){
        let total = 0;
        if(this.itemList.length>0){
            total = this.itemList.reduce(function(accumulator,current){
                accumulator += current.amount;
                return accumulator;
            },0);
        }
        this.expense.textContent = total;
        return total;
    }

    editExpense(element){
        let id = parseInt(element.dataset.id);
        console.log(element)
        console.log(element.parentElement)
        console.log(element.parentElement.parentElement)
        console.log(element.parentElement.parentElement.parentElement)
        let parent = element.parentElement.parentElement.parentElement;
        this.expenseList.removeChild(parent);
        let expense = this.itemList.filter(function(item){
            return item.id === id;
        })
        this.expenseInput.value = expense[0].title;
        this.amountInput.value = expense[0].amount;
        let tempList = this.itemList.filter(function(item){
            return item.id !== id;
        })
        this.itemList = tempList;
        this.showBalanceTotal()
    }

    deleteExpense(element){
        let id = parseInt(element.dataset.id)
        let parent = element.parentElement.parentElement.parentElement;
        this.expenseList.removeChild(parent);
        let tempList = this.itemList.filter(function(item){
            return item.id !== id;
        })
        this.itemList = tempList;
        this.showBalanceTotal()

        // fetch(`${this.endpoint}/users/${user.id}/budgets/${budget.id}`, {
        //     method: 'DELETE',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        // .then(resp => resp.json())
        // .then(json => alert(json.message))
    }
}

function addEventListeners(){
    const budgetForm = document.getElementById('budget-form')
    const expenseForm = document.getElementById('expense-form')
    const expenseList = document.getElementById('expense-list')

    const app = new App()

    budgetForm.addEventListener('submit', function(event){
        event.preventDefault();
        app.submitBudgetForm();

    });

    expenseForm.addEventListener('submit', function(event){
        event.preventDefault();
        app.submitExpenseForm();

    });

    expenseList.addEventListener('click', function(event){
        if(event.target.parentElement.classList.contains('edit-icon')){
            app.editExpense(event.target.parentElement)
        }
        else if(event.target.parentElement.classList.contains('delete-icon')){
            app.deleteExpense(event.target.parentElement)
        }
    });
}

document.addEventListener('DOMContentLoaded', () =>{
    console.log("DOM HAS LOADED!!!");
    User.renderLogInForm();
    addEventListeners();

})

