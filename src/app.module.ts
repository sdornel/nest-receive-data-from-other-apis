import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { DiceRollingModule } from './dice-rolling-app/dice-rolling.module';
import { RouterModule } from '@nestjs/core';
import { HelpModule } from './help/help.module';

@Module({
  imports: [HttpModule, DiceRollingModule, HelpModule,
  RouterModule.register([
    {
      path: 'dice-rolling',
      module: DiceRollingModule
    }
  ])
  ]
  ,
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
