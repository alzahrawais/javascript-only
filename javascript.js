//object creation with dot notation


// var CV = new Object();
// CV.fName="Awias";
// CV.lName="Shafique";
// CV.education= new Object();
// CV.education.first="Matric";
// CV.education.second="Intermediate";
// CV.education.third="Graduation";
// CV.education.fourth="Master's";
// console.log(CV);


//object creation with bracket notation

// var company= new Object();
// company.name="Microsoft";
// company.ceo=new Object();
// company.ceo.fName="Bill";
// company.ceo.lName="Gates";
// var stockPrice="company's stock porice";
// company[stockPrice]=50;
// console.log(company);

//object creation with object literal

// var computer={
// 	name:"Hewllet Packard",
// 	model:"840 g2",
// 	displaySize:14,
// 	specs:{
// 		processor:"core i5 5th gen",
// 		RAM:"4 gb",
// 		SSD:"128 gb"
// 	}
// };
// console.log( computer.name);
// function addition(x,y){
// 	setTimeout(function()
// 		{console.log(x+y),result()},
// 		3000);
	
// }
// addition(4,5);

// function result(){
// 	console.log("done!");
// }
const express()=require('express')
const app = express()

app.listen(1212,()=>{
	console.log("your port is 1212");
})\
// var http = require("http");
// http.createServer(function (request, response) {
// // Send the HTTP header
// // HTTP Status: 200 : OK
// // Content Type: text/plain
// response.writeHead(200, {'Content-Type': 'text/plain'});
// // Send the response body as "Hello World"
// response.end('Hello World\n');
// }).listen(8081);
// // Console will print the message
// console.log('Server running at http://127.0.0.1:8081/')
// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World!');
// }).listen(8080);