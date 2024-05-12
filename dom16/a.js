function handleFormSubmit(event){
  event.preventDefault();
  const username=event.target.username.value;
  const email=event.target.email.value;
  const phone=event.target.phone.value;

  const element=document.querySelector('body');
  const newElement=document.createElement('li');
  newElement.id='sekhar'
  const data1=document.createTextNode(`${username}- ${email}- ${phone}`);
  newElement.appendChild(data1);

  //deleting data elemnt add 
  const delete1=document.createElement('input');
  delete1.setAttribute('type','submit');
  delete1.setAttribute('onclick','deteing(event)');
  delete1.value='delete';
  newElement.appendChild(delete1)

  //update data
  const update1=document.createElement('input');
  update1.type='submit';
  update1.setAttribute('onclick','updateData(event)');
  update1.value='edit'
  newElement.appendChild(update1)
 

  element.append(newElement)
  // add data in local storage
  localStorage.setItem(username,JSON.stringify({email:email,phone:phone}));


}

function deteing(event){
 
 //complete this 
 const listItem = event.target.parentNode; 
 const username = listItem.textContent.split('-')[0].trim(); 
 listItem.remove();
 localStorage.removeItem(username)
console.log(username)
}


function updateData(event){
 let data=event.target.parentNode;
 let username=data.textContent.split('-')[0].trim()
 let email=data.textContent.split('-')[1].trim()
 let phone=data.textContent.split('-')[2].trim()
 console.log(username,email,phone);

 let daa=document.getElementById('form');
 daa.innerHTML=`<form onsubmit="handleFormSubmit(event)">
 <label for="username">Username</label>
 <input type="text" name="username" value='${username}' id="username" />
 <label for="email">Email</label>
 <input type="email"  value='${email}' name="email" id="email" />
 <label for="phone">Phone No</label>
 <input type="tel" name="phone" value='${phone}' id="phone" />
 <button type="submit">Submit</button>
</form>`   

 
}


