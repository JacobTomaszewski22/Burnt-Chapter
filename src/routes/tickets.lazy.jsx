import { createLazyFileRoute } from '@tanstack/react-router'
import TicketHeader from '../tickets/TicketHeader';
import TicketButtons from '../tickets/TicketButtons';
import TicketDates from '../tickets/TicketDates';
import NavigationBar from '../NavigationBar';
//The plan is to integrate the bands in town API to allow us to easily
//poll their database, see https://app.swaggerhub.com/apis-docs/Bandsintown/PublicAPI/3.0.1#/artist%20events/artistEvents

export const Route = createLazyFileRoute('/tickets')({
  component: Tickets,
});

function Tickets() {
  //Importing example data to allow us to develop
  // let json = require('../../exampleAPIData.json');
  
  return(
    <>
    <TicketHeader titleText="COME SEE THE CARNAGE"/>
    <NavigationBar />
    <TicketButtons />
    <TicketDates />
    </>
  )
}
