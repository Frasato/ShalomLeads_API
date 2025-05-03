import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ItemsController } from './controllers/items.controller';
import { ItemsService } from './services/items.service';

@Module({
  imports: [PrismaModule],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class AppModule {}
