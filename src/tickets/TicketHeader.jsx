export default function TicketHeader() {
    return(
    <>
        <link rel="stylesheet" href="styles/tickets/ticketHeader.css" />
        <div className = "ticket-header-container">
        <div className='ticket-header'>
            <div className='ticket-header-image-container'>
            {/* PLACEHOLDER FOR REAL IMAGE\/ */}
                <img
                id="ticket-header-image"
                className="ticket-header-image"
                src="/images/topBannerTickets.webp"
                loading="eager"
            />
            </div>
            <div className='ticket-header-text-container'>
            <h1 className='ticket-header-text'>
                COME SEE THE CARNAGE
            </h1>
            </div>
        </div>
        </div>
    </>
    )
}