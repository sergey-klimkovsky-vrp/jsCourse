let money = prompt("Ваш бюджет на месяц?", '');
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
    expenses[question] = answer; 
}

console.log('money ' + money);
console.log('time ' + time);
console.log('appData.Budget ' + appData.Budget);

console.log('expenses ' + JSON.stringify(expenses));
alert('бюджет на день - ' + appData.Budget/30);