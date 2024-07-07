import { http, HttpResponse } from 'msw';
import { users } from './db';

export const handlers = [
  http.get('/api/users', ({ request }) => {
    const url = new URL(request.url);

    const searchQuery = url.searchParams.get('search');
    const pageQuery = url.searchParams.get('page');

    const perPage = 4;
    const maxPage = Math.ceil(users.length / perPage);

    const search = searchQuery?.toLowerCase();
    const page = pageQuery ?? 1;

    let findUsers = users;

    if (search) {
      findUsers = users.filter((user) => {
        for (const key in user) {
          const keyTypeCorrect = key as keyof typeof user;

          const value = user[keyTypeCorrect];
          if (typeof value === 'string') {
            const lowerCaseValue = value.toLowerCase();

            if (lowerCaseValue.includes(search)) return user;
          }
        }
      });
    }

    if (search) {
      return HttpResponse.json({
        data: findUsers,
        page: 1,
        perPage: Infinity,
        maxPage: 1,
      });
    }

    const startIndex = +page > 1 ? (+page - 1) * perPage : 0;
    const endIndex = perPage * +page || Infinity;
    const resultUsers = findUsers.slice(startIndex, endIndex);

    return HttpResponse.json({
      data: resultUsers,
      page,
      perPage,
      maxPage,
    });
  }),

  http.get('/api/users/:id', ({ params }) => {
    const foundedUser = users.find((user) => user.id === params.id);
    return HttpResponse.json(foundedUser);
  }),

  http.post('/api/users', async ({ request }) => {
    const body = (await request.json()) as IUser;

    const user: IUser = {
      ...body,
      id: crypto.randomUUID(),
    };

    users.push(user);

    return HttpResponse.json(user);
  }),

  http.put('/api/users/:id', async ({ request, params }) => {
    const body = (await request.json()) as IUser;
    const updatedUserIndex = users.find((user) => user.id === params.id) as unknown as number;

    users[updatedUserIndex] = body;

    return HttpResponse.json(users[updatedUserIndex]);
  }),

  http.delete('/api/users/:id', async ({ params }) => {
    const deletedUserIndex = users.find((user) => user.id === params.id) as unknown as number;
    const deletedUser = users.splice(deletedUserIndex, 1)[0];

    return HttpResponse.json(deletedUser);
  }),
];
