import { Controller, Get } from '@nestjs/common';

@Controller()
export class DiceController {
    private readonly sides = 6; // Define the number of sides for the dice

    @Get('rolls')
    rollDice(): number {
        // Generate a random number between 1 and the fixed number of sides to simulate rolling a dice
        return Math.floor(Math.random() * this.sides) + 1;
    }
}