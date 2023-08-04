import { IsString } from 'class-validator';

export class CreateWaitlistDto {
  @IsString() phone: string;
  @IsString() username: string;
}
