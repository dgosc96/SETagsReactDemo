import { TableBody, TableRow, TableCell, Alert } from '@mui/material';

type TableErrorProps = {
  errorName: string;
  errorMessage: string;
};
export const TableError = (props: TableErrorProps) => {
  return (
    <TableBody>
      <TableRow>
        <TableCell align='center' colSpan={4}>
          <Alert
            severity='error'
            sx={{
              border: '1px solid',
              borderColor: 'error.main',
              borderRadius: '10px',
            }}
          >
            {props.errorName}: {props.errorMessage}
          </Alert>
        </TableCell>
      </TableRow>
    </TableBody>
  );
};
