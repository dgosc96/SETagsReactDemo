import TableBody from '@mui/material/TableBody';
import TableLoadingSkeleton from './components/TableLoadingSkeleton';

import { useTagsQuery } from '../../../../shared/queries/useTagsQuery';
import { TableErrorMessage } from './components/TableErrorMessage';
import { TagsTableRow } from './components/TagsTableRow';

export const TagsTableBody = () => {
  const { data, status, error } = useTagsQuery();

  if (status === 'pending') {
    return <TableLoadingSkeleton />;
  }
  if (status === 'error') {
    return (
      <TableErrorMessage errorName={error.name} errorMessage={error.message} />
    );
  }
  return (
    <TableBody>
      {data.items.map((tag) => (
        <TagsTableRow tagData={tag} key={tag.name} />
      ))}
    </TableBody>
  );
};
