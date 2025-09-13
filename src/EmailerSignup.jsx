import { neon } from '@neondatabase/serverless';


if (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "testing" ) {
    localStorage.removeItem("enteredEmail");
    
}


export default function EmailerSignup() {

    let email = "";
    async function addRecordToDB(email){
        // try{
        //     const response = await fetch("/api/add-email", {
        //         method: "POST",
        //         headers: {"Content-Type": "application/json"},
        //         body: JSON.stringify({ email }),
        //     });
        //     const responseData = await response.json();
        //     if(!response.ok){
        //         throw new Error(responseData.error || "Unknown error");
        //     }
        //     return true;
        // } catch (error) {
        //     throw new Error(`Error in EmailerSignup.jsx:addRecordToDB(): Sending database request error: [${error.toString()}]`);
        // }
    
        
        let db_request = `INSERT INTO emails_table(uuid, email, created_at) VALUES(gen_random_uuid(), '${email}', current_timestamp()) ON CONFLICT (email) DO NOTHING`;

        if(!email){
            throw "Error in [addRecordToDB()]: No email passed into function";
        }
        'use server';
        const sql = neon(import.meta.env.VITE_DATABASE_URL);
        //Three collumns in the database: UUID, Email, timestamp
        //send to db
        try{
            await sql`${db_request}`;
            return(true);
        }catch(error){
            throw(`Error in EmailerSignup.jsx:addRecordToDB(): Sending database request error: [${error.toString()}]`);
        }
    }
    

  function exitEmailSignup() {
    //function to exit the email signup
    const emailSignupContainer = document.getElementById(
      "email_signup_container",
    );
    emailSignupContainer.style.visibility = "hidden";
  }


  

  const hiddenStyle = {
    visibility: "hidden",
  };

  //if there is none here
  if (!localStorage.getItem("enteredEmail")) {
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

              email = event.target[index].value;
              //add debugger to log email?
              localStorage.setItem("enteredEmail", "true");
              //Add email to database
              addRecordToDB(email);
              //Exit the signup
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
  } else {
    return <div style={hiddenStyle} />;
  }
}
