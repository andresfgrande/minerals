import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
//import { UsersService } from '../users/users.service'; // Assuming you have a UsersService

@Injectable()
export class AuthService {
    constructor(
        //private usersService: UsersService,
        private jwtService: JwtService,
      ) {}
    
      async validateUser(username: string, pass: string): Promise<any> {
        //const user = await this.usersService.findOne(username);
       
        const user:{userId: number, username: string, password:string} ={
          userId: 1,
          username: 'test2',
          password: 'pass2'
        }
        const AuxPass = 'pass2';

        if (user && user.password === /*pass*/ AuxPass) {
          const { password, ...result } = user;
          console.log(result);
          console.log(process.env.JWT_SECRET);
          return result;
        }
        return null;
      }
    
      async login(user: any) {
        const payload = { username: user.username, sub: user.userId };
        return {
          access_token: this.jwtService.sign(payload),
        };
      }
}
