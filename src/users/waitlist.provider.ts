import { Connection } from 'mongoose';
import { WaitlistSchema } from '../schemas/waitlist.schema';
import { WaitlistService } from './waitlist.service';

export const WaitlistProviders = [
    {
        provide: 'WaitlistModelToken',
        useFactory: (connection: Connection) => connection.model('Waitlist', WaitlistSchema),
        inject: ['DbConnectionToken'],
    },
];

export const WaitlistServiceProvider = [
    {
        provide: 'WaitlistServiceProvider',
        useValue: WaitlistService,
    },
];
