import { IsString, Length, IsNumber } from 'class-validator';

export class CreateFutureDto {
  @IsNumber() readonly percentage: number;
  @IsString() @Length(3, 2500) readonly result: string;
  @IsString() @Length(3, 2500) readonly description: string;
  @IsString() @Length(3, 2500) readonly name: string;
}
