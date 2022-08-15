import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type LeaderboardDocument = Leaderboard & Document;

interface Player {
    name: string,
    score: number
}

@Schema()
export class Leaderboard {

    @Prop()
    id: number;

    @Prop()
    title: string;

    @Prop()
    players: Player[];
}

export const LeaderboardSchema = SchemaFactory.createForClass(Leaderboard);