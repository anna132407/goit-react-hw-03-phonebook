import PropTypes from 'prop-types';
import { TitleH1 } from './MainTitle.styled';

export const MainTitle = ({ title }) => {
  return <TitleH1>{title}</TitleH1>;
};
MainTitle.prototype = {
  title: PropTypes.string.isRequired,
};