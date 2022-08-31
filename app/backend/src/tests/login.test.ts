import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { describe } from 'mocha';
import { app } from '../app';

chai.use(chaiHttp);

const { expect } = chai;

describe('/login', () => {
  describe('Novo login', () => {
    let user = {
      email: 'admin@admin.com',
      password: 'secret_admin',
    };

    beforeEach(() => {
      user = {
        email: 'admin@admin.com',
        password: 'secret_admin',
      }
      sinon.restore();
    });
    
    it('Retorna BAD REQUEST com o campo de email vazio', async () => {
      user.email ='';

      const response = await chai.request(app).post('/login').send(user);

      expect(response).to.have.status(400);
    });

    it('Retorna BAD REQUEST com o campo de password vazio', async () => {
      user.password ='';

      const response = await chai.request(app).post('/login').send(user);

      expect(response).to.have.status(400);
    });

    it('Retorna UNAUTHORIZED com o campo de email inválido', async () => {
      user.email ='fefcufe@gmail.com';

      const response = await chai.request(app).post('/login').send(user);

      expect(response).to.have.status(401);
    });
    
    it('Retorna UNAUTHORIZED com o campo de senha inválido', async () => {
      user.password ='1256987';

      const response = await chai.request(app).post('/login').send(user);

      expect(response).to.have.status(401);
    });

    it('Retorna OK com os campos corretos', async () => {

      const response = await chai.request(app).get('/login');

      expect(response).to.have.status(200);
    });

    it('Retorna token com os campos corretos', async () => {

      const response = await chai.request(app).post('/login').send(user);

      expect(response.body).to.have.property('token');
    });

    it('Retorna OK com um token válido', async () => {

      const response = await chai.request(app).get('/login/validate');

      expect(response).to.have.status(200);
    });

    it('Retorna role do usuário', async () => {

      const response = await chai.request(app).post('/login/validate').send(user);

      expect(response.body).to.have.property('role');
    });
  });
}) 
