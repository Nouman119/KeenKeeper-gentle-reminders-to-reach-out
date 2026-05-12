import React, { useContext, useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { FriendContext } from '../context/FriendContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Stats = () => {
    const { friends, loading } = useContext(FriendContext);

    // ==============  Logic for Interaction  ===========
    const chartData = useMemo(() => {
        let callCount = 0;
        let textCount = 0;
        let videoCount = 0;

        friends.forEach(friend => {
            if (friend.interactions) {
                friend.interactions.forEach(item => {
                    if (item.type === 'Call') callCount++;
                    else if (item.type === 'Text') textCount++;
                    else if (item.type === 'Video') videoCount++;
                });
            }
        });

        if (callCount === 0 && textCount === 0 && videoCount === 0) return [];

        return [
            { name: 'Call', value: callCount, color: '#1E3A3A' }, 
            { name: 'Text', value: textCount, color: '#8B5CF6' }, 
            { name: 'Video', value: videoCount, color: '#22C55E' }, 
        ];
    }, [friends]);

    const renderCustomLegend = (props) => {
        const { payload } = props;
        return (
            <ul className="flex justify-center gap-6 mt-8">
                {payload.map((entry, index) => (
                    <li key={`item-${index}`} className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }} />
                        <span className="text-sm text-gray-500 font-medium">{entry.value}</span>
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans">
            <Navbar />

            <main className="grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl font-bold text-[#1A202C] mb-12">Friendship Analytics</h1>

                {chartData.length === 0 ? (
                    <div className="w-full h-125 border-2 border-dashed border-gray-200 rounded-4xl flex flex-col items-center justify-center bg-white shadow-sm">
                        <div className="text-gray-200 mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                            </svg>
                        </div>
                        <p className="text-gray-400 font-medium">No analytics data available to display.</p>
                    </div>
                ) : (
                    <div className="bg-white rounded-4xl p-12 shadow-sm border border-gray-50 w-full">
                        <h3 className="text-lg font-bold text-gray-700 mb-10">By Interaction Type</h3>
                        <div className="w-full h-100">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={chartData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius="60%"
                                        outerRadius="80%"
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {chartData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                                        ))}
                                    </Pie>
                                    <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                                    <Legend content={renderCustomLegend} />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default Stats;