export type SE_tag = {
  count: number;
  name: string;
};

export type SE_TagsFetchParams = {
  order: 'desc' | 'asc';
  sort: 'popular' | 'activity' | 'name';
  page: number;
  pagesize: number;
};
