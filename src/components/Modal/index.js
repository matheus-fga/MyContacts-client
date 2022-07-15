import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import { Overlay, Container, Footer } from './styles';

import Button from '../Button';

export default function Modal({
  title,
  body,
  confirmLabel,
  onCancel,
  onConfirm,
  isLoading,
  visible,
  danger,
}) {
  if (!visible) {
    return null;
  }

  return ReactDOM.createPortal(
    <Overlay>
      <Container danger={danger}>
        <h1>{title}</h1>
        <p>
          {body}
        </p>

        <Footer>
          <button
            type="button"
            className="cancel-button"
            onClick={onCancel}
            disabled={isLoading}
          >
            Cancelar
          </button>
          <Button
            type="button"
            danger={danger}
            onClick={onConfirm}
            isLoading={isLoading}
          >
            {confirmLabel}
          </Button>
        </Footer>
      </Container>
    </Overlay>,
    document.getElementById('modal-root'),
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  confirmLabel: PropTypes.string,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  visible: PropTypes.bool.isRequired,
  danger: PropTypes.bool,
};

Modal.defaultProps = {
  confirmLabel: 'Confirmar',
  isLoading: false,
  danger: false,
};
