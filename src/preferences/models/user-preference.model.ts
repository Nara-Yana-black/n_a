import { IsEmail, IsEnum, IsNotEmpty, IsObject, IsString, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class Channels {
  @IsEnum({ email: true, sms: true, push: true })
  @IsNotEmpty()
  email: boolean;
  
  @IsEnum({ email: true, sms: true, push: true })
  @IsNotEmpty()
  sms: boolean;
  
  @IsEnum({ email: true, sms: true, push: true })
  @IsNotEmpty()
  push: boolean;
}

export class UserPreference {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsObject()
  @ValidateNested()
  @Type(() => Channels)
  preferences: {
    marketing: boolean;
    newsletter: boolean;
    updates: boolean;
    frequency: 'daily' | 'weekly' | 'monthly' | 'never';
    channels: Channels;
  };

  @IsNotEmpty()
  @IsString()
  timezone: string;

  @IsNotEmpty()
  lastUpdated: Date;

  @IsNotEmpty()
  createdAt: Date;
}
