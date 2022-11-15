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


/*
1.We have import Routes and Route components from solid-app-router library
2. We then import Home and LinkedPet components and pass them to element props.
  ** For home route URL, We have passed the end props to match the / with exactly route
*/