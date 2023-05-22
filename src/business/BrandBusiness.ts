import { BrandDatabase } from "../database/BrandDatabase";
import { Brand } from "../models/Brand";

export class BrandBusiness {
    constructor(
        private brandDatabase: BrandDatabase
    ) {}
    public findAllBrands = async () : Promise<Brand[]>=> {
        const brandDB = await this.brandDatabase.findAllBrands()
        const result = brandDB.map(i => new Brand(i.id, i.name))
        return result
    }
}