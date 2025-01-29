import supertest from 'supertest';
import { app, server } from '../src/server.js';
export const requester = supertest(app);
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

describe('book routes test', () => {
  it('test GET:book/borrow', async () => {
    const res = await requester.get('/api/v1/book/borrow');
    expect(res.body).toEqual({ totalCount: 0, books: [] });
    expect(res.status).toEqual(200);
  });
});

describe('User routes test', () => {
  it('test POST:/user/book/borrow', async () => {
    const res = await requester.post('/api/v1/user/book/borrow').send({
      name: 'Jhon',
      email: 'Jhon@gmail.com',
      title: '1984',
    });
    expect(res.body).toMatchObject({
      name: 'jhon',
      email: 'jhon@gmail.com',
      title: '1984',
      borrowDate: expect.any(String),
      dueDate: expect.any(String),
    });
  });
  it('test PATCH: user/book/extend-due-date', async () => {
    const res = await requester
      .patch('/api/v1/user/book/extend-due-date')
      .send({
        email: 'Jhon@gmail.com',
        title: '1984',
      });
    expect(res.body).toMatchObject({
      name: 'jhon',
      email: 'jhon@gmail.com',
      title: '1984',
      borrowDate: expect.any(String),
      dueDate: expect.any(String),
    });
  });
  it('test GET: user/book/extend-due-date', async () => {
    const res = await requester.get(
      '/api/v1/user/book/borrow/Jhon@gmail.com?pageNo=1&pageCount=1&direction=asc'
    );
    expect(res.body).toMatchObject({
      totalCount: 1,
      books: [
        {
          name: 'jhon',
          email: 'jhon@gmail.com',
          title: '1984',
          borrowDate: expect.any(String),
          dueDate: expect.any(String),
        },
      ],
    });
  });
  it('test DELETE: user/book/return/:email/:title', async () => {
    const res = await requester.delete(
      '/api/v1/user/book/return/jhon@gmail.com/1984'
    );
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: 'Book returned successfully' });
  });
});
  
