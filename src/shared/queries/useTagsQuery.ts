import { useQuery } from '@tanstack/react-query';
import { useTagsFetchParamsContext } from '../context/TagsContext';

import { calculateTotalPages } from '../utils/calculateTotalPages';

export const useTagsQuery = () => {
  const { fetchParams, pagesize, fetchFn, setPageCount } =
    useTagsFetchParamsContext();
  return useQuery({
    queryKey: ['tags', fetchParams],
    queryFn: () => fetchFn(fetchParams),
    select: (data) => {
      setPageCount(calculateTotalPages(pagesize, data.total));
      return data;
    },
    gcTime: 1000 * 60 * 10,
    staleTime: 1000 * 60 * 5,
  });
};
