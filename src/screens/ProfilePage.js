import React from 'react'

const ProfilePage = () => {
    return (
        <div className="flex flex-col text-secondary bg-primary h-full">
           <div className="flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
               <div className="font-pixelated text-3xl">
                   <p className="">User</p>
                   <p>Email</p>
               </div>
           </div>
           <div className="flex flex-col justify-center items-center">
                <h1 className="font-space text-3xl">Booking History</h1>
                <img className="" src="https://wp-events-plugin.com/wp-content/uploads/2012/08/gateways-transactions-table-full.png" alt="" />
                <img className="" src="https://wp-events-plugin.com/wp-content/uploads/2012/08/gateways-transactions-table-full.png" alt="" />
            </div> 
        </div>
    )
}

export default ProfilePage
