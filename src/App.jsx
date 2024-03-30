import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import SearchResults from './components/SearchResults';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<>HOME</>} />
        <Route path="/items" element={<SearchResults />} />
        <Route path="/items/:id" element={<>ITEM DETAIL</>} />
      </Routes>
    </div>
  );
}

export default App;
