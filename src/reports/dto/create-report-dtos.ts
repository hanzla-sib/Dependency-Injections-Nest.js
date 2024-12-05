import {
  IsNumber,
  IsString,
  IsLongitude,
  IsLatitude,
  Min,
  Max,
} from 'class-validator';
export class CreateReportDto {
  @IsNumber()
  price: number;

  @IsString()
  make: string;

  @IsString()
  model: string;

  @IsNumber()
  @IsLatitude()
  lat: number;

  @IsNumber()
  @IsLongitude()
  lng: number;

  @IsNumber()
  @Min(0)
  @Max(1000000)
  mileage: number;

  @IsNumber()
  @Min(1930)
  @Max(2022)
  year: number;
}
