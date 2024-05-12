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
   console.log('okkk')
  }


