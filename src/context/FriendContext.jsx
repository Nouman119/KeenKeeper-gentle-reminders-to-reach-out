import React, { createContext, useState, useEffect } from 'react';

export const FriendContext = createContext();

export const FriendProvider = ({ children }) => {
    const [friends, setFriends] = useState([]);
    //loading state 
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFriends = async () => {
            try {
                const response = await fetch('/friends.json');
                const data = await response.json();
                setFriends(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchFriends();
    }, []);

    // ============== Function to update interactions ===========
    const addInteraction = (friendId, type) => {
        setFriends(prevFriends => {
            return prevFriends.map(friend => {
                if (friend.id === friendId) {
                    const newInteraction = {
                        id: Date.now(),
                        type: type,
                        date: new Date().toLocaleString('en-GB') 
                    };
                    
                    return {
                        ...friend,
                        interactions: [newInteraction, ...friend.interactions]
                    };
                }
                return friend;
            });
        });
    };

    return (
        <FriendContext.Provider value={{ friends, setFriends, loading, addInteraction }}>
            {children}
        </FriendContext.Provider>
    );
};