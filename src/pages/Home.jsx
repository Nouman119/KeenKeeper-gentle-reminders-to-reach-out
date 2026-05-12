import React, { useContext } from 'react' 
import { FriendContext } from '../context/FriendContext' 
import Navbar from '../components/Navbar'
import FriendCard from '../components/FriendCard'
import Footer from '../components/Footer';

export default function Home() {
    
    const { friends, loading } = useContext(FriendContext);

    if (loading) {
        return <div className="text-center py-20">Loading your friends list...</div>;
    }

    return (
        <div>
            <Navbar />
            <section className="min-h-screen bg-[#F8FAFC] py-16 px-4 font-sans">
                <div className="max-w-7xl mx-auto text-center">
                    <header className="mb-10">
                        <h1 className="text-3xl md:text-5xl font-black text-[#1A202C] mb-5 tracking-tight">
                            Friends to keep close in your life
                        </h1>
                        <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                            Your personal shelf of meaningful connections. Browse, tend, and nurture the
                            relationships that matter most.
                        </p>
                    </header>

                    <div className="flex justify-center mb-16">
                        <button className="btn bg-[#2D4F40] hover:bg-[#213b30] text-white border-none normal-case px-8 rounded-md flex items-center gap-2 shadow-lg transition-transform active:scale-95">
                            <span className="text-xl font-light">+</span> Add a Friend
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                        <div className="bg-white p-10 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <h2 className="text-5xl font-semibold text-[#2D4F40] mb-3">{friends.length}</h2>
                            <p className="text-[#4A5568] font-medium tracking-wide">Total Friends</p>
                        </div>

                        <div className="bg-white p-10 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <h2 className="text-5xl font-semibold text-[#2D4F40] mb-3">
                                {friends.filter(f => f.status === 'on-track').length}
                            </h2>
                            <p className="text-[#4A5568] font-medium tracking-wide">On Track</p>
                        </div>

                        <div className="bg-white p-10 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <h2 className="text-5xl font-semibold text-[#2D4F40] mb-3">
                                {friends.filter(f => f.status !== 'on-track').length}
                            </h2>
                            <p className="text-[#4A5568] font-medium tracking-wide">Need Attention</p>
                        </div>

                        <div className="bg-white p-10 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <h2 className="text-5xl font-semibold text-[#2D4F40] mb-3">12</h2>
                            <p className="text-[#4A5568] font-medium tracking-wide">Interactions</p>
                        </div>
                    </div>

                    {/* Friends mapping */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                        {friends.map(friend => (
                            <FriendCard key={friend.id} friend={friend} />
                        ))}
                    </div>

                    <div className="mt-24 border-t border-gray-200 w-full opacity-60"></div>
                </div>
            </section>
            <Footer />
        </div>
    )
}