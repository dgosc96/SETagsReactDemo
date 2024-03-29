export type SE_tag = {
  name: string;
  last_activity_date: number;
  count: number;
};

export type SE_TagsFetchParams = {
  order: 'desc' | 'asc';
  sort: 'popular' | 'activity' | 'name';
  page: number;
  pagesize: number;
};
