import { ReactNode, createContext, useContext, useState } from 'react';
import type { SE_TagsFetchParams } from '../types/SE_api';

type SetActionType<T> = T | ((prev: T) => T);

type TagsFetchParamsContextProps = SE_TagsFetchParams & {
  fetchParams: SE_TagsFetchParams;
  setOrderParam: (
    setAction: SetActionType<SE_TagsFetchParams['order']>
  ) => void;
  setSortParam: (setAction: SetActionType<SE_TagsFetchParams['sort']>) => void;
  setPageParam: (setAction: SetActionType<SE_TagsFetchParams['page']>) => void;
  setPagesizeParam: (
    setAction: SetActionType<SE_TagsFetchParams['pagesize']>
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
    setAction
  ) => {
    if (typeof setAction === 'function') {
      setOrder((prev) => setAction(prev));
      return;
    }
    setOrder(setAction);
  };

  const setSortParam: TagsFetchParamsContextProps['setSortParam'] = (
    setAction
  ) => {
    if (typeof setAction === 'function') {
      setSort((prev) => setAction(prev));
      return;
    }
    setSort(setAction);
  };

  const setPageParam: TagsFetchParamsContextProps['setPageParam'] = (
    setAction
  ) => {
    if (typeof setAction === 'function') {
      setPage((prev) => setAction(prev));
      return;
    }
    setPage(setAction);
  };

  const setPagesizeParam: TagsFetchParamsContextProps['setPagesizeParam'] = (
    setAction
  ) => {
    if (typeof setAction === 'function') {
      setPagesize((prev) => setAction(prev));
      return;
    }
    setPagesize(setAction);
  };

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
