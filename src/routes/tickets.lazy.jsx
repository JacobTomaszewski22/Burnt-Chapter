import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/tickets')({
  component: Tickets,
});

function Tickets() {
  return(
    <>
    <div className='ticket-header'>
      <h1>Come See The Carnage</h1>
    </div>
    </>
  )
}
