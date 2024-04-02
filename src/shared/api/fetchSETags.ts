import { SE_tagsFetchParams, fetchSETagsResponseType } from '../types/SE_api';

export const fetchSETags = async ({
  page = 1,
  pagesize = 30,
  order = 'desc',
  sort = 'popular',
}: SE_tagsFetchParams): Promise<fetchSETagsResponseType> => {
  const propsObj = {
    order,
    sort,
    page: page.toString(),
    pagesize: pagesize.toString(),
    site: process.env.SE_API_SITE_PARAM,
    filter: process.env.SE_API_TAGS_FILTER,
  };

  const searchParams = new URLSearchParams(propsObj);

  const baseUrl = new URL(
    process.env.SE_API_TAGS_PATH,
    process.env.SE_API_BASE_URL
  );

  const response = await fetch(`${baseUrl.href}?${searchParams}`);
  const parsedBody = await response.json();

  if (!response.ok) {
    throw new Error(`${parsedBody.error_name}, ${parsedBody.error_message}`);
  }

  console.log('quota_max: ', parsedBody.quota_max);
  console.log('quota_remaining: ', parsedBody.quota_remaining);

  return parsedBody as fetchSETagsResponseType;
};
