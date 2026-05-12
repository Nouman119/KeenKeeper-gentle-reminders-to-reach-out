import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { FriendContext } from './context/FriendContext';
import { Toaster } from 'react-hot-toast';

import Home from './pages/Home';
import FriendDetail from './pages/FriendDetail';
import Timeline from './pages/Timeline';
import Stats from './pages/Stats';
import NotFound from './pages/NotFound';
import Loading from './components/Loading';

function App() {
  const { loading } = useContext(FriendContext);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/friend/:id" element={<FriendDetail />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;