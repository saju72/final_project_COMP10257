function validate(){
    var firstname = document.getElementById("fName").value;
    var lastname = document.getElementById("lName").value;
    var email = document.getElementById("email").value;
    var date = document.getElementById("date").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
    var error = document.getElementById("error");

    var text;

    //Using if statement for decision making to validate the form
    if(firstname.lenght<5){
        text="Please enter the valid First Name.";
        error.innerHTML=text;
        return false;
    }

    if(lastname.length<5){
        text="Please enter the valid Last Name.";
        error.innerHTML=text;
        return false;
    }

    if(email.indexOf("@") == -1 || email.length<6){
        text="Please enter the valid Email Address.";
        error.innerHTML=text;
        return false;
    }


    if (date == null) 
        return false;

    var validatePattern = /^(\d{4})(\/|-)(\d{1,2})(\/|-)(\d{1,2})$/;

        dateValues = date.match(validatePattern);

        if (dateValues == null) 
            return false;

    var dtYear = dateValues[1];        
        dtMonth = dateValues[3];
        dtDay=  dateValues[5];

     if (dtMonth < 1 || dtMonth > 12) 
        return false;
     else if (dtDay < 1 || dtDay> 31) 
       return false;
     else if ((dtMonth==4 || dtMonth==6 || dtMonth==9 || dtMonth==11) && dtDay ==31) 
       return false;
     else if (dtMonth == 2){ 
       var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
       if (dtDay> 29 || (dtDay ==29 && !isleap)) 
              return false;
    }

    if(isNaN(phone) || phone.length != 10){
        text="Please enter the valid Phone Number.";
        error.innerHTML=text;
        return false;
    }

    if(message.length<50){
        text="Please enter valid Message.";
        error.innerHTML=text;
        return false;
    }

    alert("Information is retireved successfully.")
    return true;
}

function sendEmail(){
    Email.send({
        Host : "smtp.yourisp.com",
        Username : "sajutmg246@gmail.com",
        Password : "password",
        To : 'sajutmg246@gmail.com',
        From : document.getElementById("email").value,
        Subject : "Form Enquiry",
        Body : "First Name:" + document.getElementById("fName").value
            + "<br> Last Name:" +  document.getElementById("lName").value
            + "<br> Email:" +  document.getElementById("email").value
            + "<br> Phone:" +  document.getElementById("phone").value
            + "<br> DOB:" +  document.getElementById("date").value
            + "<br> Message:" +  document.getElementById("message").value
    }).then(
    message => alert("Message sent successfully.")
    );
}

var users = [];

class User{
    constructor(fname, lname, email, phone, date, message){
        this.fname=fname;
        this.lname=lname;
        this.email=email;
        this.phone=phone;
        this.date=date;
        this.message=message;
    }
}

function validation(fname, lname, email, phone, date, message){
    var regName = /^[a-zA-Z]+$/;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var regEx = /^\+(?:[0-9] ?){6,14}[0-9]$/;
    if(fname == "" || lname=="" || email=="" || phone=="" || date == "" || message == ""){
        alert("WARNING - Please enter all the required data.")
        return false;
    }

    else if (!regName.test(fname)){
        alert("Please enter the valid First Name.")
        return false;
    }

    else if (!regName.test(lname)){
        alert("Please enter the valid Last Name.")
        return false;
    }


    else if(!mailformat.test(email)){
        alert("Please enter the valid Email address.")
    }

    else if (!regEx.test(phone)){
        alert("Please enter the valid Phone number.")
        return false;
    }

    else if (!regName.test(date)){
        alert("Please enter the valid Date of birth.")
        return false;
    }

    else if (!regName.test(message)){
        alert("Please enter the valid Message.")
        return false;
    }

    else{
        alert("Best of luck for you journey ahead.")
        return true;
    }
}

function resetForm(params){
    document.getElementById('fname').value = "";
    document.getElementById('lname').value = "";
    document.getElementById('email').value = "";
    document.getElementById('phone').value = "";
    document.getElementById('date').value = "";
    document.getElementById('message').value = "";
}

