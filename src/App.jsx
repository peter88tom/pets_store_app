import Header from './components/Header';
import {Routes, Route} from '@solidjs/router'
import Home from './pages/Home';

function App() {
  return (
    <div class="container">
        <Header />
        <Routes>
            <Route element={<Home />} end path='/' />
            <Route element={<LikedPets />} path='/likedpets' />
        </Routes>
    </div>
   
  );
}

export default App;
