import { SE_tag } from '../types/SE_api';

export const fetchSETags = async (): Promise<SE_tag[]> => {
  const baseURL = 'https://api.stackexchange.com';
  const params =
    '/2.3/tags?order=desc&sort=popular&site=stackoverflow&filter=!bLuioGU5)qFiH6';
  const response = await fetch(baseURL + params);

  if (!response.ok) {
    throw new Error(
      `API problem: Error ${response.status}, ${response.statusText}`
    );
  }

  const parsedBody = await response.json();
  if (parsedBody.backoff || parsedBody.error_id) {
    throw new Error(
      `From API: Backoff ${parsedBody.backoff}, Error: ${parsedBody.error_id}, ${parsedBody.error_message}, ${parsedBody.error_name}`
    );
  }
  console.log('quota_max: ', parsedBody.quota_max);
  console.log('quota_remaining: ', parsedBody.quota_remaining);

  return parsedBody.items as SE_tag[];
};
