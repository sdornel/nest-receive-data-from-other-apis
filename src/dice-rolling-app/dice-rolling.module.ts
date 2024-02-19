import { Module } from '@nestjs/common';
import { DiceRollingService } from './dice-rolling.service';
import { DiceRollingController } from './dice-rolling.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [DiceRollingController],
  providers: [DiceRollingService],
})
export class DiceRollingModule {}
