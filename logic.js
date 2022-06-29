function createForm(){

//create header element
let header1= document.createElement('h3');
header1.innerHTML='<h3>Warranty Information</h3>'
document.body.appendChild(header1);


// Contact Info section
let section1 = document.createElement('h4');
section1.innerHTML='<h4>Contact Information</h4';
section1.style.fontSize ='1.2em'
document.body.appendChild(section1);

let label1;
let field1;

//create  First name label and input field
label1 =document.createElement('label');
label1.innerHTML='First Name </br>'
label1.setAttribute('for','firstName')
label1.style.fontSize = '1.1em'
document.body.appendChild(label1);

field1 = document.createElement('input');
field1.setAttribute('type','text')
field1.setAttribute('id','firstName')
document.body.appendChild(field1)

//create  Last name label and input field
label1 =document.createElement('label');
label1.innerHTML='</br>Last Name </br>'
label1.setAttribute('for','lastName')
label1.style.fontSize = '1.1em'
document.body.appendChild(label1);

field1 = document.createElement('input');
field1.setAttribute('type','text')
field1.setAttribute('id','lastName')
document.body.appendChild(field1)

//create  Company name label and input field
label1 =document.createElement('label');
label1.innerHTML='</br>Company Name </br>'
label1.setAttribute('for','coName')
label1.style.fontSize = '1.1em'
document.body.appendChild(label1);

field1 = document.createElement('input');
field1.setAttribute('type','text')
field1.setAttribute('id','coName')
document.body.appendChild(field1)


//create  email label and input field
label1 =document.createElement('label');
label1.innerHTML='</br>Email</br>'
label1.setAttribute('for','email')
label1.style.fontSize = '1.1em'
document.body.appendChild(label1);

field1 = document.createElement('input');
field1.setAttribute('type','text')
field1.setAttribute('id','email')
document.body.appendChild(field1)


//create  phone numner label and input field
label1 =document.createElement('label');
label1.innerHTML='</br>Phone Numnber</br>'
label1.setAttribute('for','phone')
label1.style.fontSize = '1.1em'
document.body.appendChild(label1);

field1 = document.createElement('input');
field1.setAttribute('type','text')
field1.setAttribute('id','phone')
document.body.appendChild(field1)


//create  Fax Number label and input field
label1 =document.createElement('label');
label1.innerHTML='</br>Fax Number</br>'
label1.setAttribute('for','fax')
label1.style.fontSize = '1.1em'
document.body.appendChild(label1);

field1 = document.createElement('input');
field1.setAttribute('type','text')
field1.setAttribute('id','fax')
document.body.appendChild(field1)


//create  Address label and input field
label1 =document.createElement('label');
label1.innerHTML='</br>Address</br>'
label1.setAttribute('for','address')
label1.style.fontSize = '1.1em'
document.body.appendChild(label1);

field1 = document.createElement('input');
field1.setAttribute('type','text')
field1.setAttribute('id','address')
document.body.appendChild(field1)

//create  city label and input field
label1 =document.createElement('label');
label1.innerHTML='</br>City </br>'
label1.setAttribute('for','city')
label1.style.fontSize = '1.1em'
document.body.appendChild(label1);

field1 = document.createElement('input');
field1.setAttribute('type','text')
field1.setAttribute('id','city')
document.body.appendChild(field1)


//create  State label and input field
label1 =document.createElement('label');
label1.innerHTML='</br>State</br>'
label1.setAttribute('for','state')
label1.style.fontSize = '1.1em'
document.body.appendChild(label1);

field1 = document.createElement('input');
field1.setAttribute('type','text')
field1.setAttribute('id','state')
document.body.appendChild(field1)


//create Zipcode label and input field
label1 =document.createElement('label');
label1.innerHTML='</br>Zip Code</br>'
label1.setAttribute('for','zipcode')
label1.style.fontSize = '1.1em'
document.body.appendChild(label1);

field1 = document.createElement('input');
field1.setAttribute('type','text')
field1.setAttribute('id','zipcode')
document.body.appendChild(field1)


//create  Country label and input field
label1 =document.createElement('label');
label1.innerHTML='</br>Country</br>'
label1.setAttribute('for','country')
label1.style.fontSize = '1.1em'
document.body.appendChild(label1);

field1 = document.createElement('input');
field1.setAttribute('type','text')
field1.setAttribute('id','country')
document.body.appendChild(field1)

// Product info section
let section2 = document.createElement('h4');
section2.innerHTML='<h4>Product Information</h4>';
section2.style.fontSize ='1.2em'
document.body.appendChild(section2);

//create Unit inforrmation label and input field
label1 =document.createElement('label');
label1.innerHTML='Unit Information</br>'
label1.setAttribute('for','unit')
label1.style.fontSize = '1.1em'
document.body.appendChild(label1);

field1 = document.createElement('input');
field1.setAttribute('type','text')
field1.setAttribute('id','unit')
document.body.appendChild(field1)


//create  date of purchase label and input field
label1 =document.createElement('label');
label1.innerHTML='</br>Date of Purchase</br>'
label1.setAttribute('for','purchaseDate')
label1.style.fontSize = '1.1em'
document.body.appendChild(label1);

field1 = document.createElement('input');
field1.setAttribute('type','date')
field1.setAttribute('id','purchaseDate')
document.body.appendChild(field1)


//create  Model Number label and input field
label1 =document.createElement('label');
label1.innerHTML='</br>Model Number</br>'
label1.setAttribute('for','model')
label1.style.fontSize = '1.1em'
document.body.appendChild(label1);

field1 = document.createElement('input');
field1.setAttribute('type','text')
field1.setAttribute('id','model')
document.body.appendChild(field1)

//create Warranty Serial Number label and input field
label1 =document.createElement('label');
label1.innerHTML='</br>Warranty Serial Number</br>'
label1.setAttribute('for','serial')
label1.style.fontSize = '1.1em'
document.body.appendChild(label1);

field1 = document.createElement('input');
field1.setAttribute('type','text');
field1.setAttribute('id','serial');
document.body.appendChild(field1)

field1 = document.createElement('p');
field1.innerHTML='Save and Sumbit'
document.body.appendChild(field1)


//create Save button
field1 = document.createElement('button');
field1.innerHTML ='Save'
field1.type="submit"
field1.name ="save"
document.body.appendChild(field1)

//create Close button
field1 = document.createElement('button');
field1.innerHTML ='Close'
field1.type="submit"
field1.name ="close"
document.body.appendChild(field1)


}