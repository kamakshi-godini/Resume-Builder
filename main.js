function addNewWEField() {
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('rows', 3);
    newNode.setAttribute('placeholder','Enter here');
   let weOb=document.getElementById('we');
    let weAddButtonOb=document.getElementById('weAddButt n');
    weOb.insertBefore(newNode, weAddButtonOb);
   }
   function addNewAQField() {
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eqField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('rows', 3);
    newNode.setAttribute('placeholder','Enter here');
    let aqOb=document.getElementById('aq');
    let aqAddButtonOb=document.getElementById('aqAddButton');
    aqOb.insertBefore(newNode, aqAddButtonOb);
   }
   function addNewSKField() {
    let newNode=document.createElement('input');
    newNode.classList.add('form-control');
    newNode.classList.add('skField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('rows', 3);
   
    newNode.setAttribute('placeholder','Enter here');
    let skOb=document.getElementById('sk');
    let skAddButtonOb=document.getElementById('skAddButton');
    skOb.insertBefore(newNode, skAddButtonOb);
   }
   function addNewCCField() {
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('ccField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('rows', 3);
    newNode.setAttribute('placeholder','Enter here');
    let ccOb=document.getElementById('cc');
    let ccAddButtonOb=document.getElementById('ccAddButton');
    ccOb.insertBefore(newNode, ccAddButtonOb);
   }
   // generating CV
   function generateCV() {
    //c ns leꈰl g("generating CV");
    let nameField=document.getElementById('nameField').value;
    let nameT1=document.getElementById('nameT1');
    nameT1.innerHTML=nameField;
    document.getElementById('nameT2').innerHTML=nameField;
    // DOB
   document.getElementById('dobT').innerHTML=document.getElementById('dobField').value;
    //c ntacts
   document.getElementById('contactT').innerHTML=document.getElementById('contactField').value;
    //email
   document.getElementById('emailT').innerHTML=document.getElementById('emailField').value;
    //address
   document.getElementById('addressT').innerHTML=document.getElementById('addressField').value;
    //Faceb k
   document.getElementById('fbT').innerHTML=document.getElementById('fbField').value;
    //Instagram
   document.getElementById('instaT').innerHTML=document.getElementById
   ('instaField').value;
    //LinkedIn
   
   document.getElementById('linkedT').innerHTML=document.getElementById('linkedField').value;
    //Objective
   document.getElementById('objectiveT').innerHTML=document.getElementById('objectiveField').value;
    // Skills
    let sks=document.getElementsByClassName('skField');
    let str2="";
    for(let e of sks){
    str2=str2 + `<li> ${e.value} </li>`;
    }
    document.getElementById('skT').innerHTML=str2;
    //w rk experience
    let wes=document.getElementsByClassName('weField');
    let str="";
    for(let e of wes){
    str=str + `<li> ${e.value} </li>`;
    }
    document.getElementById('weT').innerHTML=str;
    //Academic qualifcati n
    let aqs=document.getElementsByClassName('eqField');
    let str1="";
    for(let e of aqs){
    str1=str1 + `<li> ${e.value} </li>`;
    }
    document.getElementById('aqT').innerHTML=str1;
    //C urses & Certifcati ns
    let ccs=document.getElementsByClassName('ccField');
    let str3="";
    for(let e of ccs){
    str3=str3 + `<li> ${e.value} </li>`;
    }
    document.getElementById('ccT').innerHTML=str3;
    // c de f r setting image
    let file=document.getElementById('imgField').files[0];
    let reader=new FileReader();
    reader.readAsDataURL(file);
    // set the image t template
    reader.onloadend=function(){
    document.getElementById('imgTemplate').src=reader.result;
 };
    document.getElementById('cv-form').style.display='none';
    document.getElementById('cv-template').style.display='block';
   }
   //print CV
   function printCV() {
    window.print();
   }