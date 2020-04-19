$(document).ready(function () 
{
    $(".submit").click(function (event)
    {
        
        
        var email = $(".email").val()
        var subject = $(".subject").val()
        var message = $(".message").val()

        if(email.length>5 && email.includes("@") && email.includes("."))
        {
            
        }
        else
        {
            event.preventDefault()
            alert("The email is not valid!")
        }

        if(subject.length>2)
        {

        }
        else
        {
            event.preventDefault()
            alert("Please enter at least 3 characters for the subject!")
        }

        if(message.length> 14)
        {
            
        }
        else
        {
            event.preventDefault()
            alert("Please enter at least 15 characters for the message!")
        }


    }
    )


}
)
