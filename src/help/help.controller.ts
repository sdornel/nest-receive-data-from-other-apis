import { Controller, Get } from '@nestjs/common';

@Controller()
export class HelpController {
    @Get('help')
    getHelp(): string {
        return 'This is the help page. Welcome!';
    }
}