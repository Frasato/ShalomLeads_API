import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class ItemsService{
    constructor(private prisma: PrismaService){};

    async getAllItems(){
        return this.prisma.items.findMany();
    }

    async createItems(name: string, phone: string, address: string, medicines: string){

        if(name == '' || phone == '' || address == '' || medicines == ''){
            throw new NotFoundException();
        }

        await this.prisma.items.create({
            data: {
                name: name.trim(),
                phone: phone.trim(),
                address: address.trim(),
                usedMedicine: medicines.trim(),
            }
        })
    }
}