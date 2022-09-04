import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import { Home, Blocks, Search } from './pages';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> } />
        {/* <Route path='/' element={ <TopPage /> } /> */}
        <Route path='/blocks/:page' element={ <Blocks /> } />
        <Route path='/search/:identifier' element={ <Search /> } />
        {/* <Route path='/search/:identifier/:page' element={ <Search /> } /> */}
        <Route path='/search' element={ <Search /> } />
        {/* <Route path='/blocks/:page' element={ <BlocksPage /> } /> */}
        {/* <Route path='/find/:identifier/:page' element={ <FindPage /> } />
        <Route path='/find' element={ <FindPage /> } /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
