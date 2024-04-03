import { ReactNode, createContext, useContext, useState } from 'react';
import type {
  SE_tagsFetchParams,
  fetchSETagsResponseType,
} from '../types/SE_api';

type SetActionType<T> = T | ((prev: T) => T);

type TagsFetchParamsContextProps = SE_tagsFetchParams & {
  fetchParams: SE_tagsFetchParams;
  pageCount: number;
  setPageCount: (setAction: SetActionType<number>) => void;
  fetchFn: ({
    page,
    pagesize,
    order,
    sort,
  }: SE_tagsFetchParams) => Promise<fetchSETagsResponseType>;
  setOrderParam: (
    setAction: SetActionType<SE_tagsFetchParams['order']>
  ) => void;
  setSortParam: (setAction: SetActionType<SE_tagsFetchParams['sort']>) => void;
  setPageParam: (setAction: SetActionType<SE_tagsFetchParams['page']>) => void;
  setPagesizeParam: (
    setAction: SetActionType<SE_tagsFetchParams['pagesize']>
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
  fetchFn,
}: {
  children: ReactNode;
  fetchFn: TagsFetchParamsContextProps['fetchFn'];
}) => {
  const [order, setOrder] =
    useState<TagsFetchParamsContextProps['order']>('desc');
  const [sort, setSort] =
    useState<TagsFetchParamsContextProps['sort']>('popular');
  const [page, setPage] = useState<TagsFetchParamsContextProps['page']>(1);
  const [pagesize, setPagesize] =
    useState<TagsFetchParamsContextProps['pagesize']>(30);

  const [pageCount, setPageCount] = useState(100);

  const fetchParams = { order, sort, page, pagesize };

  return (
    <TagsFetchParamsContext.Provider
      value={{
        ...fetchParams,
        fetchParams,
        pageCount,
        setPageCount,
        fetchFn,
        setOrderParam: setOrder,
        setSortParam: setSort,
        setPageParam: setPage,
        setPagesizeParam: setPagesize,
      }}
    >
      {children}
    </TagsFetchParamsContext.Provider>
  );
};
