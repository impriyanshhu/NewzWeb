import React from 'react'
const NewzCard = ({ title, image, description, date }) => {
    return (
        <div className="w-60 md:w-80 m-auto rounded-xl overflow-hidden shadow-lg cursor-pointer hover:-translate-y-2 transition-all">
            <div>
               <img className="rounded-md w-full max-h-52 object-contain" src={image} alt="officeImage" />
            </div>
            <div>
                <p className="text-gray-900 text-sm md:text-xl font-semibold ml-2 mt-2">{title}</p>
            </div>
            <div>
                <p className="text-gray-700 text-xs font-semibold ml-2 mt-2">{date}</p>
            </div>
            <div>
                <p className="text-gray-500 text-xs md:text-sm my-1 md:my-3 ml-2">{description}</p>
            </div>
        </div>
    )
}

export default NewzCard
