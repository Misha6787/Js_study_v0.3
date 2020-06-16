'use strict';

const income = 'Фриланс', 
    mission = 100000, 
    period = 5;

let money = prompt('Ваш месячный доход?'),
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?');
    
    console.log(money);

    console.log(typeof money); 
    console.log(typeof income);
    console.log(typeof deposit);

    console.log(addExpenses.length);

    console.log('Период равен ' + period + ' месяцев');
    console.log('Цель заработать ' + mission + ' рублей');

addExpenses = addExpenses.toLowerCase();

    console.log(addExpenses.split(','));

let expenses1 = prompt('Введите обязательную статью расходов?'), 
    expenses2 = prompt('Введите обязательную статью расходов?'),
    amount1 = prompt('Во сколько это обойдется?'), 
    amount2 = prompt('Во сколько это обойдется?');

    amount1 *= 1;
    amount2 *= 1;
    money *= 1;

let amount = amount1 + amount2;

let budgetMonth = money - amount;

    console.log(budgetMonth);

let timeToMission = Math.ceil(mission / budgetMonth);

    console.log(timeToMission);

const budgetDay = Math.floor(budgetMonth / 30);

    console.log(budgetDay);

if (budgetDay > 1200) {

    console.log('У вас высокий уровень дохода');

} else if (budgetDay >= 600 && budgetDay <= 1200) {

    console.log('У вас средний уровень дохода');

} else if (budgetDay <= 600 && budgetDay > 0) {

   console.log('К сожалению у вас уровень дохода ниже среднего');

} else if (budgetDay <= 0) {

    console.log('Что то пошло не так');
} 

