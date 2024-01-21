import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function AlertInfo({variant, title, content}) {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant={variant} >
        <Alert.Heading>{title}</Alert.Heading>
        <p>
            {content}
        </p>
      </Alert>
    );
  }

}

export default AlertInfo;