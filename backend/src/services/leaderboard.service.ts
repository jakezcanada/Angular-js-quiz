import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import {Leaderboard, LeaderboardDocument} from "../schemas/leaderboard";

@Injectable()
export class LeaderboardService {

    constructor(@InjectModel(Leaderboard.name) private leaderboardModel: Model<LeaderboardDocument>) {}

    async create(leaderboard: Leaderboard): Promise<Leaderboard> {
        console.log(leaderboard)
        const newLeaderboard = new this.leaderboardModel(leaderboard);
        return newLeaderboard.save();
    }

    async readAll(): Promise<Leaderboard[]> {
        return await this.leaderboardModel.find().exec();
    }

    async readById(id): Promise<Leaderboard> {
        return await this.leaderboardModel.findById(id).exec();
    }

    async update(id, leaderboard: Leaderboard): Promise<Leaderboard> {
        return await this.leaderboardModel.findByIdAndUpdate(id, leaderboard, {new: true});
    }

    async delete(id): Promise<any> {
        return await this.leaderboardModel.findByIdAndDelete(id);
    }

}