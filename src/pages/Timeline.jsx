import React, { useContext, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FriendContext } from '../context/FriendContext';
import { Clock } from 'lucide-react'; 
import text_icon from '../assets/text.png';
import call_icon from '../assets/call.png';
import video_icon from '../assets/video.png';

const Timeline = () => {
    const { friends, loading } = useContext(FriendContext);
    
    const [filter, setFilter] = useState('All');

    const allInteractions = friends.reduce((acc, friend) => {
        const friendInteractions = friend.interactions.map(interaction => ({
            ...interaction,
            friendName: friend.name
        }));
        return [...acc, ...friendInteractions];
    }, []);

    const filteredTimeline = allInteractions.filter(item => {
        if (filter === 'All') return true;
        return item.type === filter;
    });

    const sortedTimeline = filteredTimeline.sort((a, b) => b.id - a.id);

    if (loading) return <div className="text-center py-20 font-sans">Loading timeline...</div>;

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans">
            <Navbar />

            <main className="grow max-w-7xl mx-auto w-full px-6 py-12">
                <h1 className="text-4xl font-bold text-[#1A202C] mb-8">Timeline</h1>

                <div className="mb-6">
                    <select 
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="select select-bordered w-full max-w-xs bg-white text-gray-700 rounded-lg border-gray-200 focus:outline-none shadow-sm"
                    >
                        <option value="All">All Activities</option>
                        <option value="Call">Calls</option>
                        <option value="Text">Messages</option>
                        <option value="Video">Videos</option>
                    </select>
                </div>

                <div className="space-y-3">
                    {sortedTimeline.length > 0 ? (
                        sortedTimeline.map((item) => (
                            <div key={item.id} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center gap-5 hover:shadow-md transition-shadow">
                                
                                <div className="bg-[#F8FAFC] p-3 rounded-xl">
                                    {item.type === 'Call' && (
                                        <img src={call_icon} alt="Call" className="w-6 h-6 object-contain" />
                                    )}
                                    {item.type === 'Text' && (
                                        <img src={text_icon} alt="Text" className="w-6 h-6 object-contain" />
                                    )}
                                    {item.type === 'Video' && (
                                        <img src={video_icon} alt="Video" className="w-6 h-6 object-contain" />
                                    )}
                                </div>

                                <div>
                                    <p className="text-[#1A202C] font-medium">
                                        <span className="font-bold">{item.type}</span> with {item.friendName}
                                    </p>
                                    <p className="text-xs text-gray-400 mt-1">{item.date}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="w-full h-96 border-2 border-dashed border-gray-200 rounded-4xl flex flex-col items-center justify-center bg-white shadow-sm">
                            <div className="text-gray-200 mb-4">
                                <Clock size={64} strokeWidth={1} />
                            </div>
                            <p className="text-gray-400 font-medium text-lg">No {filter !== 'All' ? filter.toLowerCase() : ''} activities found.</p>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Timeline;