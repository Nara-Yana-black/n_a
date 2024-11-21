import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PreferencesModule } from './preferences/preferences.module';
import { NotificationsModule } from './notifications/notifications.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://NaraYana:Krish_18@cluster0.zdpos.mongodb.net/n_a?retryWrites=true&w=majority&appName=Cluster0'),
    PreferencesModule,
    NotificationsModule,
  ],
})
export class AppModule {}
