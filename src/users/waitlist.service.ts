import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { Waitlist } from './waitlist.interface';
import { CreateWaitlistDto } from './create-waitlist.dto';
import { Model } from 'mongoose';

@Injectable()
export class WaitlistService {
    private hashLength = 16;
    constructor(@Inject('WaitlistModelToken') private readonly waitlist: Model<Waitlist>) { }
    async findAll(): Promise<Waitlist[]> {
        return await this.waitlist.find({}).exec();
    }

    async findById(id: string): Promise<Waitlist | null> {
        return await this.waitlist.findOne({ _id: id }).exec();
    }

    async findOne(phone: string): Promise<Waitlist | null> {
        return await this.waitlist.findOne({ phone }).exec();
    }

    async create(phone: string): Promise<Waitlist> {
        const createdWaitlist = new this.waitlist({ phone, username: this.makeName(8) });
        return await createdWaitlist.save();
    }

    makeName(length): string {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }
}
