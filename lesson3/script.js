let money, 
    time,
    moneyPerDay;


function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}

start();

let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false,
    moneyPerDay : moneyPerDay,
    chooseExpenses : function() {
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
    },
    detectDayBudge : function() {
        // console.log('Budget > ' + appData.Budget);
        appData.moneyPerDay = money/30;
        //appData.moneyPerDay = +(appData.Budget/30).toFixed(1);
        alert('Бюджет на день - ' + appData.moneyPerDay);
    },
    detectLevel : function() {
        if(appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay > 2000 ) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Произошла ошибка');
        }
    },
    checkSavings : function() {
        if(appData.savings) {
            let save    = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Какой процент?");
    
            while(isNaN(save) || save == '' || save == null || isNaN(percent) || percent == '' || percent == null) {
                checkSavings();
            }    
    
            appData.monthIncome = save/100/12*percent;
            alert('Доход за месяц - ' + appData.monthIncome);
        }
    },
    chooseOptExpenses : function() {
        for(let i=0; i<2; i++) {
            let answer = prompt("Статья необязательных расходов?", '');
            appData.optionalExpenses.i = answer;
        }
    },
    chooseIncome : function() {
        let items = prompt('Что принесет доход? (перечислите через запятую)','');
        if(typeof(items) != "string" || items == "" || typeof(items) == null) {
            alert('Вы ввели некорректные данные или не ввели их вовсею Попробуйте ще раз!');
            chooseIncome();
        } else {
            appData.income = items.split(', ');
            appData.income.push(prompt('Может что-то еще?', ''));
            appData.income.sort();            
        }

        appData.income.forEach(function(itemmassive, i) {
            alert("Способы доп. заработка: " + (i + 1) + " - " + itemmassive);
        });
    }

};

console.log('money ' + money);
console.log('time ' + time);
console.log('appData.Budget ' + appData.Budget);

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}




// ________________ practise _______________________
/*let options = {
    colors : {
        first : "red",
        second : "white"
    },
    width : 100,
    high : 100
};
options.bool = true;
delete options.high;

console.log(options);

for(let key in options) {
    console.log('Свойство ' + key + ' имеет значение ' + options[key]);

}
console.log('Количество свойств = ' + Object.keys(options).length);

let arr = [1, '2', 3, '4', 5];
arr.forEach(function(item, i, mass) {
    console.log(i + ': ' + item + ' (massive: ' + mass + ')');
});
console.log('arr ' + arr);*/




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