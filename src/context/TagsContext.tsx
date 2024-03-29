import { ReactNode, createContext, useContext, useState } from 'react';
import type { SE_TagsFetchParams } from '../types/SE_api';

type TagsFetchParamsContextProps = SE_TagsFetchParams & {
  fetchParams: SE_TagsFetchParams;
  setOrderParam: (
    callback: (prev: SE_TagsFetchParams['order']) => SE_TagsFetchParams['order']
  ) => void;
  setSortParam: (
    callback: (prev: SE_TagsFetchParams['sort']) => SE_TagsFetchParams['sort']
  ) => void;
  setPageParam: (
    callback: (prev: SE_TagsFetchParams['page']) => SE_TagsFetchParams['page']
  ) => void;
  setPagesizeParam: (
    callback: (
      prev: SE_TagsFetchParams['pagesize']
    ) => SE_TagsFetchParams['pagesize']
  ) => void;
};

const TagsFetchParamsContext =
  createContext<TagsFetchParamsContextProps | null>(null);

export const useTagsFetchParamsContext = () => {
  const context = useContext(TagsFetchParamsContext);
  if (!context) {
    throw new Error('TagsContext: No value provided');
  }
  return context;
};

export const TagsFetchParamsContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [order, setOrder] =
    useState<TagsFetchParamsContextProps['order']>('desc');
  const [sort, setSort] =
    useState<TagsFetchParamsContextProps['sort']>('popular');
  const [page, setPage] = useState<TagsFetchParamsContextProps['page']>(1);
  const [pagesize, setPagesize] =
    useState<TagsFetchParamsContextProps['pagesize']>(20);

  const setOrderParam: TagsFetchParamsContextProps['setOrderParam'] = (
    callback
  ) => setOrder((prev) => callback(prev));

  const setSortParam: TagsFetchParamsContextProps['setSortParam'] = (
    callback
  ) => setSort((prev) => callback(prev));

  const setPageParam: TagsFetchParamsContextProps['setPageParam'] = (
    callback
  ) => setPage((prev) => callback(prev));

  const setPagesizeParam: TagsFetchParamsContextProps['setPagesizeParam'] = (
    callback
  ) => setPagesize((prev) => callback(prev));

  const fetchParams = { order, sort, page, pagesize };

  return (
    <TagsFetchParamsContext.Provider
      value={{
        ...fetchParams,
        fetchParams,
        setOrderParam,
        setSortParam,
        setPageParam,
        setPagesizeParam,
      }}
    >
      {children}
    </TagsFetchParamsContext.Provider>
  );
};
