$(document).ready(function () {
    $(".submit").click(function (event) {


        var email = $(".email").val()
        var subject = $(".subject").val()
        var message = $(".message").val()
        var status = $("#status")
        status.empty()

        if (email.length > 5 && email.includes("@") && email.includes(".")) {
            document.getElementById("confirm").value=""+email;
            if (subject.length > 2) {
                if (message.length > 14) {
                     alert("A copy of your message was sent to your email adress: "+email);
                      alert("Thank you for your message.")  
                }
                else {
                    event.preventDefault()
                    status.append("<div>Please enter at least 15 characters for the message!</div>")
                }
            }
            else {
                event.preventDefault()
                status.append("<div>Please enter at least 3 characters for the subject!</div>")
            }
        }
        else {
            event.preventDefault()
            status.append("<div>The email is not valid!</div>")
        }






    }
    )


}
)



