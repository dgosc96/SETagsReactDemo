import { TableBody, TableRow, TableCell, Alert } from '@mui/material';

type TableErrorMessageProps = {
  errorName: string;
  errorMessage: string;
};
export const TableErrorMessage = (props: TableErrorMessageProps) => {
  return (
    <TableBody>
      <TableRow>
        <TableCell align='center' colSpan={4}>
          <Alert severity='error'>
            {props.errorName}: {props.errorMessage}
          </Alert>
        </TableCell>
      </TableRow>
    </TableBody>
  );
};
