import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SearchResults from './components/SearchResults';
import ItemDetail from './components/ItemDetail';
import Box from './components/Box';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<SearchResults />} />
        <Route path="/items/:id" element={<ItemDetail />} />
        <Route
          path="*"
          element={<Box text="Parece que esta página no existe" />}
        />
      </Routes>
    </div>
  );
}

export default App;
