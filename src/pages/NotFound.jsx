import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center font-sans px-6">
            <h1 className="text-9xl font-bold text-[#1E3A3A] opacity-10">404</h1>
            <div className="absolute flex flex-col items-center text-center">
                <h2 className="text-3xl font-bold text-[#1A202C] mb-4">Oops! Page Not Found</h2>
                <p className="text-gray-500 mb-8 max-w-md">
                    The page you are looking for doesn't exist or has been moved. 
                    Let's get you back to your connections.
                </p>
                <button 
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 bg-[#1E3A3A] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#2D4F40] transition-all shadow-lg active:scale-95"
                >
                    <Home size={20} />
                    Back to Home
                </button>
            </div>
        </div>
    );
};

export default NotFound;