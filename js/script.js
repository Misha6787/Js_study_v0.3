// 2 урок // lesson02
const money = 60000, 
    income = 'Фриланс', 
    deposit = true, 
    mission = 1e9, 
    period = 5;

let addExpenses = 'Комуналка, Интернет, Такси';
    
    console.log(typeof money); 
    console.log(typeof income);
    console.log(typeof deposit);

    console.log(addExpenses.length);

    console.log('Период равен ' + period + ' месяцев');
    console.log('Цель заработать ' + mission + ' рублей');

addExpenses = addExpenses.toLowerCase();

    console.log(addExpenses.split(','));

    const budgetDay = money / 30;
    
