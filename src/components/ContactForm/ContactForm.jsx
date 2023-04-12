import { useDispatch, useSelector } from 'react-redux';
import {
  FormContainer,
  Form,
  Text,
  InputForm,
  Submit,
} from './ContactForm.styled';
import { addContact } from 'Redux/contacts/operations';
import { selectContacts } from 'Redux/selectors';

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = e.target.elements;

    contacts.find(
      contact => contact.name.toLowerCase() === name.value.toLowerCase()
    )
      ? alert(`${name.value} is already in contacts`)
      : dispatch(addContact({ name: name.value, phone: number.value }));

    name.value = '';
    number.value = '';
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <label>
          <Text>Name</Text>
          <InputForm
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          <Text>Number</Text>
          <InputForm
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <Submit type="submit">Add contact</Submit>
      </Form>
    </FormContainer>
  );
};

export default ContactForm;
