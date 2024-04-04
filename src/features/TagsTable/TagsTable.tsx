import { ReactNode } from 'react';
import { TableContainer, Table, Paper } from '@mui/material';

import { TagsTableBody } from './containers/table-body/TagsTableBody';
import { TagsTableHead } from './containers/table-head/TagsTableHead';

const TagsTableTemplate = ({ children }: { children: ReactNode }) => {
  return (
    <Paper variant='outlined' sx={{ overflow: 'hidden' }}>
      <TableContainer
        sx={{
          maxHeight: '70dvh',
          scrollbarWidth: 'thin',
          '&::-webkit-scrollbar': {
            width: '0.4em',
          },
        }}
      >
        <Table size='small' stickyHeader aria-label='tags table'>
          {children}
        </Table>
      </TableContainer>
    </Paper>
  );
};

export const TagsTable = () => {
  return (
    <TagsTableTemplate>
      <colgroup>
        <col style={{ width: '30%' }} />
        <col style={{ width: '20%' }} />
        <col style={{ width: '40%' }} />
      </colgroup>
      <TagsTableHead />
      <TagsTableBody />
    </TagsTableTemplate>
  );
};

TagsTable.Template = TagsTableTemplate;
