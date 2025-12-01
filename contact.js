function validateform()
{
    var name = document.getElementById("b1").value;
    var email = document.getElementById("b2").value;
    var msg = document.getElementById("txtarea").value;


    if (name === "") {
        alert("Name cannot be empty!")
        return false;
    }

    if (email === "") {
        alert("Email cannot be empty!")
        return false;
    }

    if (msg === "") {
        alert("Please give some feedback!")
        return false;
    }

    alert("Thank you for your Feedback")
}