import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Leaderboard, LeaderboardSchema } from "./schemas/leaderboard";
import { LeaderboardService } from "./services/leaderboard.service";
import { LeaderboardController } from "./controllers/leaderboard.controller";
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [MongooseModule.forRoot(),
            MongooseModule.forFeature([{name: Leaderboard.name, schema: LeaderboardSchema}])],
  controllers: [AppController, LeaderboardController],
  providers: [AppService, LeaderboardService],
})
export class AppModule {}