let money = +prompt("Ваш бюджет на месяц?", '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

let timeData;
let expenses = {};
let optionalExpenses = {};
let income = [];
let savings = false;

let appData = {
    Budget : money,
    timeData : time,
    expenses : expenses,
    optionalExpenses : optionalExpenses,
    income : income,
    savings : savings
};

for(let i=0;i<2;i++) {
    let question = prompt('Введите обязательную статью расходов в этом месяце','');
    let answer = prompt('Во сколько обойдется?','');
    
    if( typeof(question)==='string' && typeof(question) != null && typeof(answer) != null
        && question != '' && answer != '') {
            console.log('done');
        appData.expenses[question] = answer;
        console.log('appData.expenses ' + JSON.stringify(appData));
    } else {
        alert('Что-то пошло не так. Ответьте на вопрос еще раз!');
        i = --i;
        console.log('appData.expenses ' + JSON.stringify(appData));
    }     
}

/*let n = 0;
while(n < 2) {
    let question = prompt('Введите обязательную статью расходов в этом месяце','');
    let answer = prompt('Во сколько обойдется?','');
    
    if( typeof(question)==='string' && typeof(question) != null && typeof(answer) != null 
        && question != '' && answer != '') {
            console.log('done');
        appData.expenses[question] = answer;
        n++;
    } else {
        alert('Что-то пошло не так. Ответьте на вопрос еще раз!');
        n = --n;
    }
}

let m = 0;
do{
    let question = prompt('Введите обязательную статью расходов в этом месяце','');
    let answer = prompt('Во сколько обойдется?','');
    
    if( typeof(question)==='string' && typeof(question) != null && typeof(answer) != null 
        && question != '' && answer != '') {
            console.log('done');
        appData.expenses[question] = answer;
        m++;
    } else {
        alert('Что-то пошло не так. Ответьте на вопрос еще раз!');
        m = --m;
    }
} while(m<2);*/

console.log('money ' + money);
console.log('time ' + time);
console.log('appData.Budget ' + appData.Budget);
console.log('expenses ' + JSON.stringify(expenses));

appData.moneyPerDay = appData.Budget/30;
alert('бюджет на день - ' + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000 ) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Произошла ошибка');
}