import { useQuery } from '@tanstack/react-query';
import { fetchSETags } from '../api/fetchSETags';

export const useTagsQuery = () =>
  useQuery({ queryKey: ['tags'], queryFn: fetchSETags });
