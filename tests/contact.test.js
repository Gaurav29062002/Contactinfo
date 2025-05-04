const request = require('supertest');
const app = require('../server');

describe('POST /api/contact', () => {
  it('should return 200 if data is valid', async () => {
    const res = await request(app)
      .post('/api/contact')
      .send({ name: 'John', email: 'john@example.com', message: 'Hello' });
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe('Form submitted successfully.');
  });

  it('should return 400 if any field is missing', async () => {
    const res = await request(app)
      .post('/api/contact')
      .send({ name: '', email: '', message: '' });
    expect(res.statusCode).toEqual(400);
    expect(res.body.error).toBe('All fields are required.');
  });
});