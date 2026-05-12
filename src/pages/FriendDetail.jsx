import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FriendContext } from '../context/FriendContext';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import toast from 'react-hot-toast';
import { Phone, MessageSquare, Video, ArrowLeft, Archive, Trash2, BellRing } from 'lucide-react';

const FriendDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { friends, loading, addInteraction } = useContext(FriendContext);

    const friend = friends.find(f => f.id.toString() === id);

    if (loading) return <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">Loading...</div>;
    if (!friend) return <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">Friend not found!</div>;

    const handleActionWithToast = (type, actionLabel) => {
        addInteraction(friend.id, type);
        toast.success(actionLabel, {
            style: { borderRadius: '12px', background: '#1E3A3A', color: '#fff' },
        });
    };

    const handleActionSilent = (type) => {
        addInteraction(friend.id, type);
    };

    return (
        <div className="min-h-screen bg-[#F0F4F8] flex flex-col font-sans">
            <Navbar />

            <main className="grow max-w-6xl mx-auto w-full px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    
                    {/*Profile Card & Manage Buttons */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 text-center">
                            <div className="flex justify-center mb-4">
                                <img
                                    src={friend.picture || 'https://via.placeholder.com/150'}
                                    alt={friend.name}
                                    className="w-24 h-24 rounded-full object-cover border-4 border-gray-100"
                                />
                            </div>
                            <h2 className="text-xl font-bold text-[#2D3748] mb-2">{friend.name}</h2>
                            <div className="flex flex-col items-center gap-2 mb-4">
                                <span className="bg-[#FF4D4D] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">Overdue</span>
                                <span className="bg-[#DCFCE7] text-[#166534] text-[10px] font-bold px-3 py-1 rounded-full uppercase">{friend.relationship || 'Friend'}</span>
                            </div>
                            <p className="text-gray-500 text-sm italic mb-1">"Former colleague, great mentor"</p>
                            <p className="text-gray-400 text-[11px]">Preferred: email</p>
                        </div>

                        {/* Buttons */}
                        <div className="space-y-2">
                            <ManageButton 
                                icon={<BellRing size={18} className="text-gray-600"/>} 
                                label="Snooze 2 Weeks" 
                                onClick={() => handleActionSilent('Snooze')} 
                            />
                            <ManageButton 
                                icon={<Archive size={18} className="text-gray-600"/>} 
                                label="Archive" 
                                onClick={() => handleActionSilent('Archive')} 
                            />
                            <ManageButton 
                                icon={<Trash2 size={18} className="text-red-500"/>} 
                                label="Delete" 
                                isDanger={true} 
                                onClick={() => handleActionSilent('Delete')} 
                            />
                        </div>
                    </div>

                    {/*Stats & Goals */}
                    <div className="lg:col-span-8 space-y-6">
                        {/* Stats Row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <StatBox value={friend.days_since_contact || 0} label="Days Since Contact" />
                            <StatBox value="30" label="Goal (Days)" />
                            <StatBox value="Feb 27, 2026" label="Next Due" isSmall={true} />
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-bold text-[#2D3748]">Relationship Goal</h3>
                                <button class="btn">Edit</button>
                            </div>
                            <p className="text-sm text-gray-500">
                                Connect every <span className="font-bold text-gray-800">30 days</span>
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="font-bold text-[#2D3748] mb-6">Quick Check-In</h3>
                            <div className="grid grid-cols-3 gap-4">
                                <ActionButton icon={<Phone size={24} />} label="Call" onClick={() => handleActionWithToast('Call', 'Call logged!')} />
                                <ActionButton icon={<MessageSquare size={24} />} label="Text" onClick={() => handleActionWithToast('Text', 'Text logged!')} />
                                <ActionButton icon={<Video size={24} />} label="Video" onClick={() => handleActionWithToast('Video', 'Video logged!')} />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};


const ManageButton = ({ icon, label, onClick, isDanger }) => (
    <button
        onClick={onClick}
        className="w-full py-3 bg-white rounded-lg border border-gray-100 font-medium flex items-center justify-center gap-3 shadow-sm hover:bg-gray-50 transition-all active:scale-95"
    >
        {icon}
        <span className={`text-sm ${isDanger ? 'text-red-500' : 'text-gray-700'}`}>{label}</span>
    </button>
);

const StatBox = ({ value, label, isSmall }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center flex flex-col justify-center min-h-30">
        <h4 className={`${isSmall ? 'text-lg' : 'text-3xl'} font-bold text-[#1E3A3A] mb-1`}>{value}</h4>
        <p className="text-gray-400 text-[10px] uppercase font-semibold tracking-wide">{label}</p>
    </div>
);

const ActionButton = ({ icon, label, onClick }) => (
    <button
        onClick={onClick}
        className="flex flex-col items-center justify-center py-6 px-4 bg-[#F8FAFC] border border-gray-50 rounded-xl hover:bg-gray-100 transition-all group active:scale-95"
    >
        <div className="text-gray-600 mb-2">{icon}</div>
        <span className="text-xs font-medium text-gray-600">{label}</span>
    </button>
);

export default FriendDetail;