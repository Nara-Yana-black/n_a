import { Controller, Post, Get, Body, Param } from '@nestjs/common';

@Controller('notifications') // Base route is /notifications
export class NotificationsController {
  @Post('send')
  sendNotification(@Body() body: any) {
    return `Notification sent with data: ${JSON.stringify(body)}`;
  }

  @Get(':userId/logs')
  getNotificationLogs(@Param('userId') userId: string) {
    return `Fetching notification logs for user ${userId}`;
  }

  @Get('stats')
  getNotificationStats() {
    return 'Fetching notification stats...';
  }
}
