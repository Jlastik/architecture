import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { AuthModule } from './core/auth/auth.module';
import { UserSettingsModule } from './core/user-settings/user-settings.module';
// {
//   type: 'postgres',
//   host: 'localhost',
//   port: 4000,
//   username: 'root',
//   password: 'root',
//   database: 'test',
//   entities: [UserEntity],
//   synchronize: true,
// }
@Module({
  providers: [],
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthModule,
    UserSettingsModule,
  ],
})
export class AppModule {}
