import PropTypes from 'prop-types';
import { TitleH2 } from './Subtitle.styled';

export const Subtitle = ({ subtitle }) => {
  return <TitleH2>{subtitle}</TitleH2>;
};
Subtitle.prototype = {
  title: PropTypes.string.isRequired,
};