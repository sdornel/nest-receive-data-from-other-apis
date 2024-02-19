import { HttpService } from "@nestjs/axios";
import { Controller, Get } from "@nestjs/common";

@Controller()
export class DiceRollingController {
    url = 'http://localhost:3000/api/rolls';
    allDiceRolls = [];
    constructor(private readonly httpService: HttpService) {}

    @Get('get-all-dice-rolls')
    async findAll(): Promise<void> {
        await this.httpService.get(this.url).subscribe(response => {
            console.log('response.data', response.data);
            this.allDiceRolls = response.data.previousRolls;
        });
    }
}
