import supertest from 'supertest';
import { app, server } from '../src/server.js';

const requester = supertest(app);
afterAll(() => {
  server.close();
});

describe('User API integration suit', () => {
  it('Do health check', async () => {
    const response = await requester.get('');
    expect(response.body).toEqual({
      message: 'server is healthy',
    });
  });
});
