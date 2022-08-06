import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import { TopPage, BlocksPage, FindPage } from './pages';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <TopPage /> } />
        <Route path='/blocks/:page' element={ <BlocksPage /> } />
        <Route path='/find/:identifier/:page' element={ <FindPage /> } />
        <Route path='/find' element={ <FindPage /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
