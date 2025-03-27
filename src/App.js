import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import Modify from './pages/Modify';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Extension from './pages/Extension';
import { useState } from 'react';

function App() {
  const [data, setData] = useState([
    {
      employee: "John Doe",
      extension: "101",
      mobile: "+1-123-456-7890",
      email: "john.doe@example.com",
    },
    {
      employee: "Jane Smith",
      extension: "102",
      mobile: "+1-987-654-3210",
      email: "jane.smith@example.com",
    },
    {
      employee: "Robert Brown",
      extension: "103",
      mobile: "+1-555-123-4567",
      email: "robert.brown@example.com",
    },
  ]);

  // Add New Extension to Data
  const handleAddExtension = (newExtension) => {
    setData([...data, newExtension]);
  };

  // Update Extension Data
  const handleUpdate = (updatedExtension) => {
    const updatedData = data.map((item) =>
      item.extension === updatedExtension.extension ? updatedExtension : item
    );
    setData(updatedData);
  };

  return (
    <Router>
      <AppContent
        data={data}
        handleAddExtension={handleAddExtension}
        handleUpdate={handleUpdate}
      />
    </Router>
  );
}

function AppContent({ data, handleAddExtension, handleUpdate }) {
  const location = useLocation();

  // Show Navbar only if the user is not on the login page
  const showNavbar = location.pathname !== '/';

  return (
    <div className="App">
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home data={data} />} />
        <Route path="/extension" element={<Extension onAddExtension={handleAddExtension} />} />
        <Route path="/modify" element={<Modify onUpdate={handleUpdate} />} />
      </Routes>
    </div>
  );
}

export default App;
