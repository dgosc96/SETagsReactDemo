import {
  SE_tag,
  SE_tagsFetchParams,
  fetchSETagsResponseType,
} from '../shared/types/SE_api';

function getRandomInt(min: number = 0, max: number = 1): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const getRandomUnixTimestamp = () => {
  const currTime = Date.now() / 1000;
  return getRandomInt(1, currTime);
};

export async function mockTagsFetch({
  page = 1,
  pagesize = 30,
  order = 'desc',
  sort = 'popular',
}: SE_tagsFetchParams): Promise<fetchSETagsResponseType> {
  const generateMockItems = () => {
    let items: Array<SE_tag> = [
      {
        name: `Tag${(page - 1) * pagesize + 1}`,
        last_activity_date: getRandomUnixTimestamp(),
        count: getRandomInt(0, 999999),
      },
    ];

    for (let index = 1; index < pagesize; index++) {
      items.push({
        name: `Tag${(page - 1) * pagesize + (index + 1)}`,
        last_activity_date: getRandomUnixTimestamp(),
        count: getRandomInt(0, 999999),
      });
    }

    if (sort === 'popular') {
      items.sort((a, b) => {
        let result = a.count - b.count;
        if (order === 'desc') result *= -1;
        return result;
      });
    }
    if (sort === 'activity') {
      items.sort((a, b) => {
        let result = a.last_activity_date - b.last_activity_date;
        if (order === 'desc') result *= -1;
        return result;
      });
    }

    if (sort === 'name') {
      items.sort((a, b) => {
        let result = 0;
        if (a.name < b.name) {
          result = -1;
        }
        if (a.name > b.name) {
          result = 1;
        }
        if (order === 'desc') result *= -1;
        return result;
      });
    }

    return items;
  };
  const mockItems = generateMockItems();
  const mockData: fetchSETagsResponseType = {
    items: mockItems,
    has_more: true,
    quota_max: 1000,
    quota_remaining: 800,
    total: mockItems.length,
  };

  const response = new Response(JSON.stringify(mockData), {
    status: 200,
    statusText: 'OK',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.json() as unknown as fetchSETagsResponseType;
}
