let money = +prompt("Ваш бюджет на месяц?");
let time = +prompt("Введите дату в формате YYYY-MM-DD");
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
let n = true;


/*for (let i = 0; i < 2; i++){
    let a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = prompt("Во сколько обойдется?");
    if(typeof(a) === "string" && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50){
        alert('Статья успешно записана');
        appData.expenses[a] = b;
    } else{
        alert('Данные введены неккоректно, попробуйте еще раз');
    }
};*/

for (let i = 0; i < 2; i++){
    let a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = prompt("Во сколько обойдется?");

    if(typeof(a) === "string" && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50 && a != false && b != false){
        alert('Статья успешно записана');
        appData.expenses[a] = b;
    } else{
        alert('Данные введены неккоректно, попробуйте еще раз');
        i--;
    }
};

alert(appData.budget / 30);