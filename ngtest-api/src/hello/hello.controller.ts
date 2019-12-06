import { Controller, Get } from '@nestjs/common';
import {ApiTags } from '@nestjs/swagger';
import { HelloService } from './hello.service';

@ApiTags('hello')
@Controller()
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @Get()
  getHello(): string {
    return this.helloService.getHello();
  }
}
