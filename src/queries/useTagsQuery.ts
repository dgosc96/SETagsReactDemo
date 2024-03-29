import { useQuery } from '@tanstack/react-query';
import { fetchSETags } from '../api/fetchSETags';
import { useTagsFetchParamsContext } from '../context/TagsContext';

export const useTagsQuery = () => {
  const { fetchParams } = useTagsFetchParamsContext();
  return useQuery({
    queryKey: ['tags', fetchParams],
    queryFn: () => fetchSETags(fetchParams),
    staleTime: 1000 * 60 * 5,
  });
};
