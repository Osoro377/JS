let money, time;
function start(){
    money = +prompt("Введите ваш бюджет на месяц: ");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Введите ваш бюджет на месяц: ");
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

function chooseExpenses(){
    for (let i = 0; i < 2; i++){
        let a = prompt("Введите обязательную статью расходов в этом месяце: "),
            b = prompt("Введите сумму расходов на статью: ");
    
        if(typeof(a) === "string" && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50 && typeof(a) != false && typeof(b) != false){
            alert('Статья успешно записана');
            appData.expenses[a] = b;
        } else{
            alert('Данные введены неккоректно, попробуйте еще раз');
            i--;
        }
    };
}
chooseExpenses();

function chooseOptionalExpenses(){

    let q = prompt("Имеются ли у вас необязательные расходы? \nДа Нет");
    if (q == "Да"){

        for(let i = 0; i < 3; i++){
        let a = prompt("Введите необязательную статью расходов в этом месяце");
        let b = +prompt("Введите сумму расходов на статью: ");

        if(typeof(a) === "string" && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50 && typeof(a) != false && typeof(b) != false){
            alert('Статья успешно записана');
            appData.optionalExpenses[a] = b;
        } else{
            alert('Данные введены неккоректно, попробуйте еще раз');
            i--;
        }
      }
    }

}
chooseOptionalExpenses();

function checkSavings(){
    let bol = prompt("Имеются ли у вас накопления?\nДа Нет");
    if (bol == "Да"){
        appData.savings = true;
    }
    if(appData.savings == true){
        let save = +prompt("Введите сумму ваших накоплений: ");
        let percent = +prompt("Введите годовой процент: ");
        appData.monthIncome = (save/100/12*percent);
        alert("Ваш доход в месяц : " + appData.monthIncome);
    }
}
checkSavings();

function detectDayBudget(){
    appData.budgetPerDay = (appData.budget / 30).toFixed(1);
    alert("Ваш бюджет на день: " + appData.budgetPerDay + " рублей");
}
detectDayBudget();

function detectLevel(){

if (appData.budgetPerDay < 100){
    alert("Минимальный уровень достатка");
}else if ( appData.budgetPerDay > 100 && appData.budgetPerDay < 2000){
    alert("Средний уровень достатка");
}else if ( appData.budgetPerDay > 2000){
    alert("Высокий уровень достатка");
}else {
    alert("Произошла ошибка");
}

}
detectLevel();
