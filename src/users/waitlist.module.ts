import { WaitlistController } from './waitlist.controller';
import { Module } from '@nestjs/common';
import { WaitlistService } from './waitlist.service';
import { WaitlistProviders } from './waitlist.provider';
import { DatabaseModule } from '../db/db.module';
@Module({
  imports: [DatabaseModule],
  controllers: [WaitlistController],
  providers: [
      WaitlistService,
      ...WaitlistProviders,
    ],
  exports: [WaitlistService],
})
export class WaitlistModule {}
