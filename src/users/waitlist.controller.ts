import { Get, Post, Body, Controller, Param, HttpStatus } from '@nestjs/common';
import { CreateWaitlistDto } from './create-waitlist.dto';
import { WaitlistService } from './waitlist.service';
import { Waitlist } from './waitlist.interface';

@Controller('waitlist')
export class WaitlistController {

    constructor(private readonly waitlistService: WaitlistService) { }

    @Get()
    async findAll() {
        const data = await this.waitlistService.findAll();

        let status = HttpStatus.OK;
        if (!data) status = HttpStatus.NOT_FOUND;
        return { status, data };
    }

    @Get(':id')
    async findById(@Param('id') id) {
        const data = await this.waitlistService.findOne(id);

        let status = HttpStatus.OK;
        if (!data) status = HttpStatus.NOT_FOUND;
        return { status, data };
    }

    @Post()
    async create(@Body() createWaitlistDto: CreateWaitlistDto) {
        const duplicateWaitlist = await this.waitlistService.findOne(createWaitlistDto.phone);
        if (!duplicateWaitlist) {
            try {
                const data = await this.waitlistService.create(createWaitlistDto.phone);
                return { status: HttpStatus.CREATED, data };
            } catch (err) {
                return { status: HttpStatus.BAD_REQUEST, error: err.message };
            }
        } else {
            return { status: HttpStatus.ACCEPTED, data: duplicateWaitlist };
        }
    }
}
