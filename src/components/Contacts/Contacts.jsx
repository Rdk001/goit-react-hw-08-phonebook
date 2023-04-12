import ContactForm from 'components/ContactForm/ContactForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';
import { Title } from 'components/ContactForm/ContactForm.styled';
const Contacts = () => {
  return (
    <>
      <Title>Phonebook</Title>
      <ContactForm />
      <Filter />
      <ContactsList />
    </>
  );
};

export default Contacts;
