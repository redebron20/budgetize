class UI {
    constructor() {
      this.budgetFeedback = document.querySelector(".budget-feedback");
      this.expenseFeedback = document.querySelector(".expense-feedback");
      this.budgetForm = document.getElementById("budget-form");
      this.budgetInput = document.getElementById("budget-input");
      this.budgetAmount = document.getElementById("budget-amount");
      this.expenseAmount = document.getElementById("expense-amount");
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
        const value = this.budgetInput.value;
        if(value==='' || value <0){
            this.budgetFeedback.classList.add('showItem')
            this.budgetFeedback.innerHTML = `<p>value cannot be negative or empty</p>`;
            const self = this;
            setTimeout(function(){
                self.budgetFeedback.classList.remove('showItem')
            }, 5000);
        }
        else{
            this.budgetAmount.textContent = value;
            this.budgetInput.value = '';
            this.showBalance();
        }
    }

    showBalance(){
        const expense = this.totalExpense();
        const total = parseInt(this.budgetAmount.textContent) - expense;
        this.balanceAmount.textContent = total;
    }

    totalExpense(){
        let total = 400;
        return total
    }
  }

const base_url = "http://127.0.0.1:3000"
const budgetService = new BudgetService(base_url)

function addEventListeners(){
    const budgetForm = document.getElementById('budget-form')
    const expenseForm = document.getElementById('expense-form')
    const expenseList = document.getElementById('expense-list')

    const ui = new UI()

    budgetForm.addEventListener('submit', function(event){
        event.preventDefault();
        ui.submitBudgetForm();

    });

    expenseForm.addEventListener('submit', function(event){

    });

    expenseList.addEventListener('click', function(event){

    });


}

document.addEventListener('DOMContentLoaded', () =>{
    console.log("DOM HAS LOADED!!!");
    addEventListeners();
    renderLogInForm()
    // budgetService.getBudgets()
    // Budget.renderForm()

})

