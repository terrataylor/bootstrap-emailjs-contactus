$("#contact-form").submit(function(event){
    event.preventDefault();
   
    let formData = {
        to_name: $("#name").val(),
        from_name: $("#email").val(),
        message_html: $("#message").val()
    };
    console.log(formData);
    console.log(this);
    emailjs.send("gmail", "template_nskmpxVW", formData).then(function(response) {
        console.log('SUCCESS!', response.status, response.text); 
        alert("eMail Sent!");
     }, function(error) {
        console.log('FAILED...', error);
     });


})