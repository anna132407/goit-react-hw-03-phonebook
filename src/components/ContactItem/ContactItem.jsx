import { PropTypes } from 'prop-types';
import {
  ListItem,
  DelBtn,
  ContactName,
  ContactNumber,
} from './ContactItem.styled';

export const ContactItem = ({ contactInfo, deleteContact }) => {
  const { id, name, number } = contactInfo;
  return (
    <ListItem>
      <ContactName>{name}</ContactName>
      <ContactNumber>{number}</ContactNumber>
      <DelBtn onClick={() => deleteContact(id)}>Delete</DelBtn>
    </ListItem>
  );
};

ContactItem.prototype = {
  contactInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
