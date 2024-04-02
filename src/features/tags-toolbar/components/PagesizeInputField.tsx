import { Box, Button, TextField, Tooltip } from '@mui/material';
import { useTagsFetchParamsContext } from '../../../shared/context/TagsContext';
import { useState, SyntheticEvent } from 'react';

export const PagesizeInputField = () => {
  const { pagesize, setPagesizeParam } = useTagsFetchParamsContext();
  const [localPagesizeVal, setLocalPageNum] = useState(pagesize);
  const [fieldError, setFieldError] = useState(false);
  const [fieldErrorMsg, setFieldErrorMsg] = useState('');

  const handleFieldChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const inputValue = parseInt(event.target.value);

    if (!event.target.checkValidity()) {
      setFieldError(true);
      setFieldErrorMsg(event.target.validationMessage);
      return;
    }
    setFieldError(false);

    setLocalPageNum(inputValue);
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    if (fieldError) return;
    setPagesizeParam(localPagesizeVal);
  };

  return (
    <Box
      component='form'
      noValidate
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
      }}
    >
      <Tooltip
        title={fieldErrorMsg}
        open={fieldError}
        placement='top'
        arrow
        slotProps={{
          tooltip: {
            sx: {
              color: 'white',
              fontWeight: 'bold',
              backgroundColor: 'error.main',
              '& .MuiTooltip-arrow': {
                color: 'error.main',
              },
            },
          },
        }}
      >
        <TextField
          required
          id='pagesize-number-field'
          error={fieldError}
          type='number'
          label='Rows per page'
          placeholder='1-100'
          InputLabelProps={{ shrink: true }}
          inputProps={{
            min: 1,
            max: 100,
            style: {
              fontSize: 15,
              padding: '0.5em',
              textAlign: 'center',
            },
          }}
          onChange={handleFieldChange}
          defaultValue={pagesize}
          variant='outlined'
          size='small'
          sx={{
            width: '7.5rem',
          }}
        />
      </Tooltip>
      <Button type='submit' variant='outlined' size='small'>
        Change
      </Button>
    </Box>
  );
};
