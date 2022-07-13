import PropTypes from 'prop-types';

import checkCircle from '../../../assets/images/check-circle.svg';
import xCircle from '../../../assets/images/x-circle.svg';

import { Container } from './styles';

export default function ToastMessage({ text, type }) {
  return (
    <Container>
      {type === 'danger' && <img src={xCircle} alt="X" />}
      {type === 'success' && <img src={checkCircle} alt="check" />}
      <strong>{text}</strong>
    </Container>
  );
}

ToastMessage.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['default', 'success', 'danger']),
};

ToastMessage.defaultProps = {
  type: 'default',
};
