import { useQuery } from '@tanstack/react-query';
import { useTagsFetchParamsContext } from '../../context/TagsContext';

export const useTagsQuery = () => {
  const { fetchParams } = useTagsFetchParamsContext();
  return useQuery({
    queryKey: ['tags', fetchParams],
    gcTime: 1000 * 60 * 10,
    staleTime: 1000 * 60 * 5,
  });
};
