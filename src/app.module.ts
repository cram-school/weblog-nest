import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import DbConfig from './constant/config';
import { UserModule } from './module/user.module';



@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => (new DbConfig())
    }),
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor() {
    console.table([new DbConfig()])
  }
}


