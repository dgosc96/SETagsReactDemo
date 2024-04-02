export type SE_tag = {
  name: string;
  last_activity_date: number;
  count: number;
};

export type SE_tagsFetchParams = {
  order: 'desc' | 'asc';
  sort: 'popular' | 'activity' | 'name';
  page: number;
  pagesize: number;
};

export type fetchSETagsResponseType = {
  items: SE_tag[];
  has_more: boolean;
  quota_max: number;
  quota_remaining: number;
  total: number;
};
