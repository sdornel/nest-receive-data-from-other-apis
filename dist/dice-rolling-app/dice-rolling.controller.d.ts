import { HttpService } from "@nestjs/axios";
export declare class DiceRollingController {
    private readonly httpService;
    url: string;
    allDiceRolls: any[];
    constructor(httpService: HttpService);
    findAll(): Promise<void>;
}
