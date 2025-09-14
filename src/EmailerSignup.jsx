if (
  process.env.NODE_ENV === "development" ||
  process.env.NODE_ENV === "testing" ||
  process.env.NODE_ENV === "staging"
) {
  localStorage.removeItem("enteredEmail");
}

export default function EmailerSignup() {
  let email = "";
  async function addRecordToDB(email) {
    try {
      console.log(JSON.stringify({ email }));
      const emailObject = {
        email: email,
      };
      const response = await fetch(`/api/email`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailObject),
      });
      console.log(response.toString());
      const responseData = response.json();
      if (!response.ok) {
        throw new Error(responseData.error || "Unknown error");
      }

      console.log(responseData);
      return true;
    } catch (error) {
      throw new Error(
        `Error in EmailerSignup.jsx:addRecordToDB(): Sending database request error: [${error.toString()}]`,
      );
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
            <h2>&#128128;Never Miss A Show!&#128128;</h2>
            <p>Sign up to our mailing list to keep up to date!</p>
            <p>Please disable ad-block for this site to allow this to work!</p>
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
