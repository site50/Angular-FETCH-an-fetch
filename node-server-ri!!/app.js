const express = require("express");
 const app = express();
 // обработчик по маршруту localhost:3000/sum
app.get("/sum1", function(request, response){ 
// получаем параметры из строки запроса и преобразуем в числа
    //const number1 = parseInt(request.query.num1);
  //  const number2 = parseInt(request.query.num2); 
    //const sum1 = parseInt(request.query.sum1);
   // const sum1 = parseInt(request.query.sum1); 
    // вычисляем сумму
   // const sum1 = number1 * number2; 
    const sum2=1000;
    // настройка заголовков CORS для кроссдоменных запросов
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    response.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS'); 
    response.send({result: sum2});
});

//app.listen(3000);
const server = app.listen(3000, "localhost", () => {
  console.log(`Listening on localhost:3000`);
});

