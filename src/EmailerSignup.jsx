import { useState } from "react";

function exitEmailSignup() {
    //function to exit the email signup
}

export default function EmailerSignup() {
     const [email, setEmail] = useState("");

    return(
        <div className="email_Signup_Container">
            <button className="email_Signup_Exit" onClick={(event) => {
                event.preventDefault();
                exitEmailSignup();
                }}/>
                
            <form onSubmit={(event) => {
                event.preventDefault();
                //Maybe take out into function
                //find which event.target[0,1,2,3...].value it is
                let index = 0;
                for(index; index < event.target.length; index++){
                    if(event.target[index].id == "email_input"){
                        break;
                    }
                }

                if(index == event.target.length){
                    throw("Error: EmailerSignup. No email_input id can be found in event.target")
                }

                setEmail(event.target[index].value);
                //add debugger to log email
                //going to need to do an API call out to a database to store the emails
            }}>
                <h2>Never Miss A Show!</h2>
                <p>Sign up to our mailing list to keep up to date!</p>
                <input type="email"
                        id="email_input"
                        placeholder="Enter your email"
                        title="Invalid email address"/>
                <button type="submit">Sign Up</button>
            </form>
            
        </div>
    )
}