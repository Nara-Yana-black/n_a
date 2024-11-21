import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller('preferences') // Base route is /preferences
export class PreferencesController {
  @Get()
  getAllPreferences() {
    return 'Fetching all preferences!';
  }

  @Post()
  createPreference(@Body() body: any) {
    return `Preference created: ${JSON.stringify(body)}`;
  }

  @Get(':userId')
  getPreference(@Param('userId') userId: string) {
    return `Fetching preference for user ${userId}`;
  }

  @Patch(':userId')
  updatePreference(@Param('userId') userId: string, @Body() body: any) {
    return `Preference for user ${userId} updated with: ${JSON.stringify(body)}`;
  }

  @Delete(':userId')
  deletePreference(@Param('userId') userId: string) {
    return `Preference for user ${userId} deleted.`;
  }
}
