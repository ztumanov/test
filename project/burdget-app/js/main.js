let startBtn = document.getElementById("start"),
    budgetValue = document.getElementsByClassName("budget-value")[0],
    dayBudgetValue = document.getElementsByClassName("daybudget-value")[0],
    levelValue = document.getElementsByClassName("level-value")[0],
    expensesValue = document.getElementsByClassName("expenses-value")[0],
    optionalExpensesValue = document.getElementsByClassName("optionalexpenses-value")[0],
    incomeValue = document.getElementsByClassName("income-value")[0],
    monthSavingValue = document.getElementsByClassName("monthsavings-value")[0],
    yearSavingValue = document.getElementsByClassName("yearsavings-value")[0],

    expansesItem = document.getElementsByClassName("expenses-item"),
    expensesBtn = document.getElementsByTagName("button")[0],
    optionalExpensesBtn = document.getElementsByTagName("button")[1],
    countBtn = document.getElementsByTagName("button")[2],
    optionsExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSaving = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

    let money, time;

startBtn.addEventListener('click', function() {
    time = prompt('Введите дату год-месяц-день', '');
    money = +prompt("бюджет на месяц ?", '');

    while (isNaN(money) || money == '' || money == null) {
        money = prompt("Ваш бджет?", "");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesBtn.addEventListener('click', function() {

    let sum = 0;

    for (let i = 0; i < expansesItem.length; i++){
        let a = expansesItem[i].value,
            b = expansesItem[++i].value;

        if ((typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50){
            console.log("верно");
            appData.expenses[a] = b;
            sum += +b;

        }else{
            i = i - 1;
        }
    }
    expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function() {
    for (let i = 0; i < optionsExpensesItem.length; i++) {
        let opt = optionsExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ', '; 
    }
});

countBtn.addEventListener('click', function() {

    if (appData.budget != undefined){
        appData.moneyPerDay = (appData.budget / 30).toFixed(); 
    dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent ='Минимальный уровень достатка';
        }else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent ='Средний уровень достатка';
        }else if (appData.moneyPerDay > 2000) {
            levelValue.textContent ='Высокий уровень достатка';
        }else {
            levelValue.textContent ='Error';
        }
        }else{
            dayBudgetValue.textContent = 'ошибка';
        }
});

incomeItem.addEventListener('input', function() {
    let items = incomeItem.value;
    appData.income = items.split(', ');
    incomeValue.textContent =  appData.income;

});

checkSaving.addEventListener('click' , function() {
    if(appData.saving == true) {
        appData.saving = false;
    }else{
        appData.saving = true;
    }
});

sumValue.addEventListener('input', function() { 
    if (appData.saving == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;

            monthSavingValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingValue.textContent = appData.yearIncome.toFixed(1);

    }
});

percentValue.addEventListener('input', function() { 
    if (appData.saving == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;

            monthSavingValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingValue.textContent = appData.yearIncome.toFixed(1);

    }
});

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    saving: false,
};
