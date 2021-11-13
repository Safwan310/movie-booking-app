import React from 'react'
import { Link } from 'react-router-dom';
const TicketBooking = () => {
    let seats = [],flag = true;
    let selectedSeats = [];
    const selectionHandler = (e) => {
        e.target.classList.toggle("bg-fifth");
        let n = e.target.getAttribute('data-value')
        if(n in selectedSeats){
            selectedSeats.splice(selectedSeats.indexOf(n), 1);
        }
        else{
            selectedSeats.push(n);
        }
    }
    const bookingHandler = (e)=>{
        
    }
    for(let i = 0; i < 56; i++){
        seats.push([i+1,flag]);
        flag = !flag;
    }
    let seatStatus = seats.map((seat)=>{
        return seat[1] ? 
        (
            <div className="flex justify-center items-center text-2xl font-pixelated text-secondary" data-value={seat[0]} onClick={(e)=>{selectionHandler(e)}}>
                {seat[0]}
            </div>
        ):
        (
            <div className="bg-tertiary flex justify-center items-center">
                🦠
            </div>
        )
    })
    return (
        <div className="flex flex-col h-screen justify-center space-y-5">
            <div className="text-secondary font-space text-center">
                SCREEN THIS SIDE
            </div>
            <div className="flex-1 grid grid-cols-7 grid-rows-7">
                {seatStatus}
            </div>
            <div className="flex justify-center">
                <Link to = "/profile" className="bg-fifth rounded-2xl p-3 font-space" onClick={bookingHandler}>Confirm Selection</Link>
            </div>
        </div>
    )
}

export default TicketBooking
