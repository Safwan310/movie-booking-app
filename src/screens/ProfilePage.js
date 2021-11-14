import React from 'react'

const ProfilePage = () => {
    return (
        <div className="grid grid-rows-2 text-secondary bg-primary h-screen">
           <div className="flex justify-around items-center">
                <img 
                src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/affcf4fc5dc4ab772b8cee509bbcf74f-1594275275/benterbatanes%20animation/make-an-animated-pixel-art-avatar-of-you.gif" 
                alt="" 
                className="rounded-full h-1/2"/>
               <div className="font-pixelated text-3xl">
                   <p className="">User: User 1</p>
                   <p>Email: user1@email</p>
               </div>
           </div>
           <div className="flex flex-col justify-center items-center">
                <h1 className="font-space text-3xl">Booking History</h1>
                {/* <img className="" src="https://wp-events-plugin.com/wp-content/uploads/2012/08/gateways-transactions-table-full.png" alt="" /> */}
            </div> 
        </div>
    )
}

export default ProfilePage
