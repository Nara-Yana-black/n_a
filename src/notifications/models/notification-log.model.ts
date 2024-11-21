import { IsEnum, IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class NotificationLog {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsEnum(['marketing', 'newsletter', 'updates'])
  type: 'marketing' | 'newsletter' | 'updates';

  @IsNotEmpty()
  @IsEnum(['email', 'sms', 'push'])
  channel: 'email' | 'sms' | 'push';

  @IsNotEmpty()
  @IsEnum(['pending', 'sent', 'failed'])
  status: 'pending' | 'sent' | 'failed';

  @IsOptional()
  @IsString()
  failureReason?: string;

  @IsNotEmpty()
  @Object()
  metadata: Record<string, any>;
}
