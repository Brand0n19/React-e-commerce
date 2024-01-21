import Alert from 'react-bootstrap/Alert';

function AlertS({variant, title}) {
    <Alert key={variant} variant={variant}>
        {title}
    </Alert>
}
export default AlertS;