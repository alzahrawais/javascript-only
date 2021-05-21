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

var computer={
	name:"Hewllet Packard",
	model:"840 g2",
	displaySize:14,
	specs:{
		processor:"core i5 5th gen",
		RAM:"4 gb",
		SSD:"128 gb"
	}
};
console.log( computer.name);