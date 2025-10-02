import { useState, useEffect, useDebugValue } from "react";
import GigDate from "./GigDate";
import { capitaliseFirstLetter } from "../generalFunctions";

export default function TicketDates() {
    //state to set up which time period we are doing it for
    const [timePeriod, setTimePeriod] = useState("all");
    const [gigObjects, setGigObjects] = useState(["Loading"]);

    console.log(`Outside Function: ${timePeriod}`);

    //using a use effect to pull the API data, and set our gig objects to the data returned
    useEffect(() => {
        console.log(`Inside Effect: ${timePeriod}`);
        const fetchData = async () => {
            try {
                const gigResponse = await fetchTicketInfo(timePeriod);
                console.log(JSON.stringify(gigResponse));
                if(gigResponse && gigResponse.success === true){
                    setGigObjects(gigResponse.data);
                }else{
                    setGigObjects(["Error Communicating With Bands In Town"]);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setGigObjects(["Error Communicating With Bands In Town"]);
            }
        };
        fetchData();
    }, [timePeriod]);
    
    //first we need to get the info from the API
    async function fetchTicketInfo(timePeriod){
        try{
            console.log(`Inside Function: ${timePeriod}`);
            const request = {
                date: timePeriod
            }
            console.log(`Inside Function: ${JSON.stringify(request)}`);
            const response = await fetch(`/api/shows`, {
                method: "POST",
                headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                },
                body: JSON.stringify(request),
            });
            const responseData = await response.json();
            if (!response.ok) {
                throw new Error(responseData.error || "Unknown error");
            }
            //We need to add a datetime object to each item in the array
            // console.log(JSON.stringify(responseData));
            for(let element of responseData.data){
                element.dateTimeUnixFormat = Date.parse(element.datetime);
                console.log(element.dateTimeUnixFormat);
            }

            responseData.data.sort((a,b) => b.dateTimeUnixFormat - a.dateTimeUnixFormat);
            return responseData;
        }catch(error){
            console.error(error);
        }
    }

    function displayLoadingOrTickets(){
        if(gigObjects[0] == "Loading"){
            return(
                <h1>Loading...</h1>
            )
        }else if(gigObjects[0] == "Error Communicating With Bands In Town"){
            return(
                <h1>{gigObjects[0]}</h1>
            )
        }else if(gigObjects.length == 0){
            return(
                <h1>No Shows Currently Booked!</h1>
            )
        }else{
            return (
                <>
                    {gigObjects.map((individualGig) => (
                        <GigDate gig={individualGig} key={individualGig.id}/>
                    ))}
                </>
            );
        }
    }

    return(
        <>
            {/* <link rel="stylesheet" href="styles/tickets/gigStyles.css" /> */}
            <hr/>
            <div className="ticket-time-period-container">
                <h1 className="ticket-time-period-display">{capitaliseFirstLetter(timePeriod)} Shows:</h1>
                <form className="ticket-time-period-form">
                    <button 
                        className={`ticket-time-button ticket-time-button-upcoming ${timePeriod === 'upcoming' ? 'active' : ''}`}
                        type="button"
                        onClick={() => setTimePeriod('upcoming')}>
                        Upcoming
                    </button>
                    <button 
                        className={`ticket-time-button ticket-time-button-past ${timePeriod === 'past' ? 'active' : ''}`}
                        type="button"
                        onClick={() => setTimePeriod('past')}>
                        Past
                    </button>
                    <button 
                        className={`ticket-time-button ticket-time-button-all ${timePeriod === 'all' ? 'active' : ''}`}
                        type="button"
                        onClick={() => setTimePeriod('all')}>
                        All
                    </button>
                </form>
                
            </div>
            
            <div className="ticket-gigs">
                {displayLoadingOrTickets()}
            </div>
        </>
    )
}