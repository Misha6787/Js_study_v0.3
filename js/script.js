'use strict';
let money;

const isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

const start = function() {
    do {
        money = prompt('Ваш месячный доход?');
    }
    while (!isNumber(money));
};
start();

const appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    mission: 100000,
    period: 3,
    budget: money,
    budgetDay: 0,
    deposit: [],
    budgetMonth: 0, 
    expensesMonth: 0,
    asking: function(){
        const addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        appData.addExpenses = addExpenses.toLowerCase().split(',');
        

        const GetExpensesMonth = function() {
            let sum = 0;
            for(let i = 0; i < 2; i++) {
                appData.expenses = prompt('Введите обязательную статью расходов');
                do {
                    sum = +prompt('Во сколько это обойдется?');
                } 
                while(!isNumber(sum) || sum == '');
                sum += sum;
            }
            return sum;
        };
        
        appData.expensesMonth = GetExpensesMonth();

    }, 
    getBudget: function() { 

        appData.budgetMonth = appData.budget - appData.expensesMonth;

        console.log('Бюджет на месяц: ' + appData.budgetMonth);

        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
        console.log('Бюджет на день: ' + appData.budgetDay);

        console.log('Расходы за месяц: ' + appData.expensesMonth);
    },
    getTargetMonth: function(a, b) {
        Math.ceil(a / b);
        if(Math.ceil(a / b) > 0) {
            console.log('Cрок достижения цели в месяцах: ' + Math.ceil(a / b)); 
        } else {
            console.log('Цель не будет достигнута'); 
        }
        return;
    }, 
    getStatusIncome: function() {
        if (appData.budgetDay > 1200) {
            return ('У вас высокий уровень дохода');
    
        } else if (appData.budgetDay >= 600 && appData.budgetDay <= 1200) {
            return ('У вас средний уровень дохода');
    
        } else if (appData.budgetDay <= 600 && appData.budgetDay > 0) {
            return ('К сожалению у вас уровень дохода ниже среднего');
    
        } else if (appData.budgetDay <= 0) {
            return ('Что то пошло не так');
        } 
    },
    statusData: function() {
            console.log('');
            console.log('Наша программа включает в себя данные: ');
        for (let key in appData) {
            console.log(key + ':' + appData[key]);
        }
    },
};

appData.asking();

appData.getBudget();

appData.getTargetMonth(appData.mission, appData.budgetMonth);

    console.log(appData.getStatusIncome());

appData.statusData();
