import { Body, Controller, Get, Post } from "@nestjs/common";
import { ItemsService } from "src/services/items.service";

@Controller('api/leads')
export class ItemsController{
    constructor(private itemService: ItemsService){};

    @Get()
    async getAllItems(){
        return this.itemService.getAllItems();
    }

    @Post()
    async create(@Body() body: {name: string, phone: string, address: string, medicines: string}){
        return this.itemService.createItems(body.name, body.phone, body.address, body.medicines);
    }
}