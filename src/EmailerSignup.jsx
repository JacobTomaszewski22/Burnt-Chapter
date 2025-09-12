import { useState } from "react";

function exitEmailSignup() {
  //function to exit the email signup
  const emailSignupContainer = document.getElementById(
    "email_signup_container",
  );
  emailSignupContainer.style.visibility = "hidden";
}

export default function EmailerSignup() {

    if(process.env.NODE_ENV === 'development'){
        localStorage.removeItem('enteredEmail');
    }
  const [email, setEmail] = useState("");

    const hiddenStyle = {
      visibility: "hidden"
    }

  //if there is none here
  if(!localStorage.getItem("enteredEmail")){
    return (
        <div className="email_signup_container" id="email_signup_container">
        <div className="email_signup_window">
            <button
            className="email_Signup_exit"
            onClick={(event) => {
                event.preventDefault();
                exitEmailSignup();
            }}
            >
            &#215;
            </button>

            <form
            className="email_signup_form"
            onSubmit={(event) => {
                event.preventDefault();
                //Maybe take out into function
                //find which event.target[0,1,2,3...].value it is
                let index = 0;
                for (index; index < event.target.length; index++) {
                if (event.target[index].id == "email_input") {
                    break;
                }
                }

                if (index == event.target.length) {
                throw "Error: EmailerSignup. No email_input id can be found in event.target";
                }

                setEmail(event.target[index].value);
                //add debugger to log email?
                localStorage.setItem("enteredEmail", "true");
                //going to need to do an API call out to a database to store the emails
                exitEmailSignup();
            }}
            >
            <h2>Never Miss A Show!</h2>
            <p>Sign up to our mailing list to keep up to date!</p>
            <input
                type="email"
                id="email_input"
                placeholder="Enter your email"
                title="Invalid email address"
            />
            <button type="submit">Sign Up</button>
            </form>
        </div>
        </div>
    );
 }else{
    return(
    <div style={hiddenStyle}/>
    );
 }
}
