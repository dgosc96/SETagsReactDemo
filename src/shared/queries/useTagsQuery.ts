import { useQuery } from '@tanstack/react-query';
import { useTagsFetchParamsContext } from '../context/TagsContext';

import { calculateTotalPages } from '../utils/calculateTotalPages';
import { useEffect } from 'react';

export const useTagsQuery = () => {
  const { fetchParams, pagesize, fetchFn, setPageCount } =
    useTagsFetchParamsContext();

  const query = useQuery({
    queryKey: ['tags', fetchParams],
    queryFn: () => fetchFn(fetchParams),
    gcTime: 1000 * 60 * 10,
    staleTime: 1000 * 60 * 5,
  });

  useEffect(() => {
    if (query.data) {
      setPageCount(calculateTotalPages(pagesize, query.data.total));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query.data]);

  return query;
};
