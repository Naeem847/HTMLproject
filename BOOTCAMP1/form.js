document.getElementbyId("Studentform").addeventListner("submit",function(event){

    
    event.preventDefault();


   let name=document.getElementbyId("name").value;
   let email=document.getElementbyId("email").value;
    let password=document.getElementbyId("password").value;
    let message=document.getElementbyId("message").value;


   if(name=== "" || email=== ""|| password === ""){


    message.innerHtML="Please fill all fields!";
    message.style.color="red"
   }
   else{
    message.innerHtML="form submit successfully!";
    message.style.color="green";
    console.log("Name:",name)
    console.log("Email:",email)
    console.log("Password:",name)
   }
});

