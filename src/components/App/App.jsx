// import ContactForm from '../ContactForm/ContactForm';
// import ContactsList from '../ContactsList/ContactsList';
// import Filter from '../Filter/Filter';
import { Container } from './App,styled';
import Navigation from 'components/Navigation/Navigation';
import { Routes, Route } from 'react-router-dom';
import Login from 'components/Login/Login';
import Contacts from 'components/Contacts/Contacts';
import Home from 'components/Home/Home';
import Register from '../Register/Register';

const App = () => {
  return (
    <Container>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Container>
  );
};

export default App;
