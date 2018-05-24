import { IsString, Length, IsNumber } from 'class-validator';

export class CreateFutureDto {
  @IsString() @Length(3, 2500) readonly name: string;
}
