import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { WaitlistModule } from './users/waitlist.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    WaitlistModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
