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
    addExpenses2: [],
    addExpenses: [],
    mission: 100000,
    period: 3,
    budget: money,
    budgetDay: 0,
    deposit: [],
    persentDeposit: 0,
    moneyDeposit: 0,
    budgetMonth: 0, 
    strL: 0,
    expensesMonth: 0,
    asking: function(){

        if(confirm('У вас есть дополнительный источник заработка?')) {
            let itemIncome;
            do {
                itemIncome = prompt('Какой у вас есть дополнительный заработок?');
            } 
            while(isNumber(itemIncome) || itemIncome == '' || itemIncome.match(/^[ ]+$/));
            do {
                appData.income[itemIncome] = prompt('Сколько в месяц вы на этом зарабатываете?');
            }
            while(!isNumber(appData.income[itemIncome]));
        }

        appData.addExpenses2 = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');

        
        function ucFirst(str) {
            if (!str) return str;
            appData.strL= str.length;
            str = str[0].toUpperCase() + str.slice(1);
            return str;
          }

        appData.addExpenses2 = appData.addExpenses2.split(',');


        appData.addExpenses2.map(function (name){
            name = name.trim();
            name += ', ';
            name += ucFirst(name);
            name = name.slice(appData.strL);
            appData.addExpenses += name;
        });
        console.log(appData.addExpenses);



        for(let i = 0; i < 2; i++) {
            let prom;
            do {
                prom = prompt('Введите обязательную статью расходов');
            }
            while(isNumber(prom) || prom == '' || prom.match(/^[ ]+$/));
            do {
                appData.expenses[prom] = prompt('Во сколько это обойдется?');
            } 
            while(!isNumber(appData.expenses[prom]));
        }

        for(let key in appData.expenses) {
            appData.expensesMonth += +appData.expenses[key];
        }

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
    getInfoDeposit: function() {
        if(appData.deposit) {
            do {
                appData.persentDeposit = prompt('Какой у вас годовой процент?');
            }
            while(!isNumber(appData.persentDeposit));

            do {
                appData.moneyDeposit = prompt('Какая сумма заложена');
            }
            while(!isNumber(appData.moneyDeposit));
        }
    },
    calcSavedMoney: function() {
        return appData.budgetMonth * appData.period;
    }
};

appData.asking();

appData.getBudget();

appData.getTargetMonth(appData.mission, appData.budgetMonth);

    console.log(appData.getStatusIncome());

appData.statusData();

appData.getInfoDeposit();

console.log(appData.calcSavedMoney(), appData.persentDeposit, appData.moneyDeposit);