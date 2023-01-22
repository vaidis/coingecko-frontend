import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import type { SerializedError } from '@reduxjs/toolkit'
import { serializeError } from 'serialize-error';

type IProps = {
  errorProp: FetchBaseQueryError | SerializedError
}

const Error = ({ errorProp }: IProps): JSX.Element => {
  const { status, error } = serializeError(errorProp);

  return (
    <Alert severity="error">
      <AlertTitle>{String(status)}</AlertTitle>
      {String(error)}
    </Alert>
  )
}

export default Error;
