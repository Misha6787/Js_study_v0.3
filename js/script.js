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
    

    // console.log('Добро пожаловать в консоль');

    // const cor = 4**2; // современный синтаксис ES 7 (возведение в степень)

    // console.log(cor); // возведение в степень новый формат
    // console.log(Number.isInteger(5));// определяет целое ли число (true)
    // console.log(Number.isInteger(5.5)); // определяет целое ли число (false)

    // const str = 'Welcome, My Friend!';

    // console.log(str[0], str[1]);
    // console.log(str.toUpperCase()); // высший регистр
    // console.log(str.toLowerCase()); // нижний регистр

    // console.log(str.replace('Welcome', 'Good buy')); // замена одного текста на другой

    // console.log(str.split(' ')); 
    // Каждое слово становится отдельным массивом, можно сделать так и каждкую букву

    // const strFriut = 'apple, kiwi, orange';

    // console.log(strFriut.split(',')); // разбираем на массивы строку
