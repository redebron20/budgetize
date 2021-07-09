const budgetFeedback= () => document.querySelector(".budget-feedback");
const expenseFeedback = () => document.querySelector(".expense-feedback");
const budgetForm = () => document.getElementById("budget-form");
//const budgetTitle = () => document.getElementById("budget-title");
const budgetInput = () => document.getElementById("budget-input");
const budget = () => document.getElementById("budget-amount");
const expense = () => document.getElementById("expense-amount");
const balance = () => document.getElementById("balance");
const balanceAmount = () => document.getElementById("balance-amount");
const expenseForm = () => document.getElementById("expense-form");
const expenseInput = () => document.getElementById("expense-input");
const amountInput = () => document.getElementById("amount-input");
const expenseList = () => document.getElementById("expense-list");
const itemList = () => [];
const itemID = () => 0;

const baseUrl = "http://127.0.0.1:3000"
// const budget = new Budget(base_url)
var user_id;
var budget_id;