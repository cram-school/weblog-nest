import { Controller, Get } from '@nestjs/common';
import { UserService } from '../service/user.service';

@Controller('/u')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
  async getHello(): Promise<Object> {
    
    return await this.userService.getHello();
  }
}
