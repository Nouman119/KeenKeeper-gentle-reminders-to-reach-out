import React from 'react';
import { Link } from 'react-router-dom'; 

const FriendCard = ({ friend }) => {
    
    const { id, name, picture, days_since_contact, tags, status } = friend; 

    return (
        <Link to={`/friend/${id}`} className="block transition-transform active:scale-95">
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center w-full max-w-70 border border-gray-50 hover:shadow-lg transition-shadow cursor-pointer">

                {/*Profile Picture */}
                <div className="avatar mb-4">
                    <div className="w-24 rounded-full ring ring-[#F1F5F9] ring-offset-base-100 ring-offset-2">
                        <img src={picture} alt={name} />
                    </div>
                </div>

                {/*Friend Name */}
                <h2 className="text-[#1E293B] text-xl font-bold mb-1">{name}</h2>

                
                <p className="text-gray-400 text-sm mb-4">{days_since_contact}d ago</p>

                {/*Tags */}
                <div className="mb-3">
                    <span className="bg-[#DCFCE7] text-[#166534] text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                        {tags[0] || "General"}
                    </span>
                </div>

                {/*Status Badge */}
                <button className={`btn btn-sm border-none rounded-full px-6 normal-case text-white shadow-sm
                    ${status === 'on-track' ? 'bg-[#F0A942] hover:bg-[#d9983b]' : 'bg-red-400'}`}>
                    {status === 'on-track' ? 'Almost Due' : 'Needs Action'}
                </button>

            </div>
        </Link>
    );
};

export default FriendCard;