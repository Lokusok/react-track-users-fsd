import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/posts', (resolver) => {
    console.log('requestId:', resolver.requestId);
    return HttpResponse.json({
      id: 'fsopd-sdoid',
      title: 'First post',
      body: 'Lorem ipsum dolor sit amet',
    });
  }),
];
