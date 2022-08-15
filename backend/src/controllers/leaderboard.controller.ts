import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from "@nestjs/common";
import { Leaderboard } from "../schemas/leaderboard";
import { LeaderboardService } from "../services/leaderboard.service";

@Controller('leaderboards')
export class LeaderboardController {

    leaderboards: {
        id: number,
        title: string,
        players:
            {
                name: string,
                score: number
            }[]
    }[] = [
        {
            id: 1,
            title: 'Test Leaderboard1',
            players: [
                {name: 'test1', score: 1},
                {name: 'test2', score: 3},
                {name: 'test5', score: 6},
            ]
        },
        {
            id: 2,
            title: 'Test Leaderboard2',
            players: [
                {name: 'test1', score: 1},
                {name: 'test2', score: 3},
                {name: 'test5', score: 6},
            ]
        },
        {
            id: 3,
            title: 'Test Leaderboard3',
            players: [
                {name: 'test1', score: 1},
                {name: 'test2', score: 3},
                {name: 'test5', score: 6},
            ]
        }
    ];

    constructor(private readonly leaderboardService: LeaderboardService){}

    @Post()
    async createLeaderboard(@Res() response, @Body() leaderboard: Leaderboard) {
        console.log('hit')
        const newLeaderboard = await this.leaderboardService.create(leaderboard);
        return response.status(HttpStatus.CREATED).json({
            newLeaderboard
        });
    }

    @Get()
    async fetchAll(@Res() response) {
        const leaderboards = await this.leaderboardService.readAll();
        return response.status(HttpStatus.OK).json({
            leaderboards
        });
    }

    @Get('/:id')
    async findById(@Res() response, @Param('id') id) {
        const leaderboard = await this.leaderboardService.readById(id);
        return response.status(HttpStatus.OK).json(leaderboard);
    }

    @Put('/:id')
    async update(@Res() response, @Param('id') id, @Body() leaderboard: Leaderboard) {
        const updatedLeaderboard = await this.leaderboardService.update(id, leaderboard);
        return response.status(HttpStatus.OK).json({
            updatedLeaderboard
        })
    }

    @Delete('/:id')
    async delete(@Res() response, @Param('id') id) {
        const deletedBook = await this.leaderboardService.delete(id);
        return response.status(HttpStatus.OK).json({
            deletedBook
        })
    }
}