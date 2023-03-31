import request from 'supertest';
import app from '../src/app';

describe('Test the root path', () => {
  test('It should respond to the GET method at /', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });

  test('It should respond to the GET method at a nonexistent path with a 404', async () => {
    const response = await request(app).get('/nonexistent');
    expect(response.statusCode).toBe(404);
  });
});
