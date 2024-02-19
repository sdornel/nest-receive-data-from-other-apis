import { Module } from '@nestjs/common';
import { HelpController } from './help.controller';

@Module({
  controllers: [HelpController], // Include the HelpController in the module
})
export class HelpModule {}