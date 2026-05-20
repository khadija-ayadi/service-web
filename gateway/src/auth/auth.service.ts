import { Injectable, HttpException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { RegisterInput, LoginInput } from './auth.types';

const AUTH_SERVICE_URL = process.env.AUTH_SERVICE_URL || 'http://localhost:3001';

@Injectable()
export class AuthService {
  constructor(private httpService: HttpService) {}

  async register(input: RegisterInput) {
    try {
      const query = `
        mutation Register($input: RegisterInput!) {
          register(input: $input) {
            token
            user { id email name role createdAt }
          }
        }
      `;
      const { data } = await firstValueFrom(
        this.httpService.post(`${AUTH_SERVICE_URL}/graphql`, {
          query,
          variables: { input },
        }),
      );
      if (data.errors) throw new HttpException(data.errors[0].message, 400);
      return data.data.register;
    } catch (e) {
      throw new HttpException(e.message || 'Auth service error', 500);
    }
  }

  async login(input: LoginInput) {
    try {
      const query = `
        mutation Login($input: LoginInput!) {
          login(input: $input) {
            token
            user { id email name role createdAt }
          }
        }
      `;
      const { data } = await firstValueFrom(
        this.httpService.post(`${AUTH_SERVICE_URL}/graphql`, {
          query,
          variables: { input },
        }),
      );
      if (data.errors) throw new HttpException(data.errors[0].message, 400);
      return data.data.login;
    } catch (e) {
      throw new HttpException(e.message || 'Auth service error', 500);
    }
  }

  async validateToken(token: string) {
    try {
      const query = `query { me { id email name role } }`;
      const { data } = await firstValueFrom(
        this.httpService.post(
          `${AUTH_SERVICE_URL}/graphql`,
          { query },
          { headers: { Authorization: `Bearer ${token}` } },
        ),
      );
      if (data.errors) return null;
      return data.data.me;
    } catch {
      return null;
    }
  }
}