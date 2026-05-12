import React from 'react';

const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
            <span className="loading loading-spinner loading-lg text-[#1E3A3A]"></span>
            <p className="text-gray-500 font-medium animate-pulse">Loading your connections...</p>
        </div>
    );
};

export default Loading;