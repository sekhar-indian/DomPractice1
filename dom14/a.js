function handleFormSubmit(event){
    event.preventDefault();
    const username=event.target.username.value;
    const email=event.target.email.value;
    const phone=event.target.phone.value;
  console.log(username,email,phone)
    
  
    const element=document.querySelector('body');
    const newElement=document.createElement('li')
  console.log(username,email,phone)
    const f=document.createTextNode(`${username}- ${email}- ${phone}`)
    newElement.appendChild(f);
    element.append(newElement)
  
    localStorage.setItem(username,JSON.stringify({email:email,phone:phone}));
  
  }