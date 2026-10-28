import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Especie } from "./espécie.entity.js";

@Module ({
    imports: [
        TypeOrmModule.forFeature ([Especie])
    ]
})

export class EspecieModule {}