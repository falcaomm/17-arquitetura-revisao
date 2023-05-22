import { BrandDB } from "../models/Brand";
import { BaseDatabase } from "./BaseDatabase";

export class BrandDatabase extends BaseDatabase{

    private TABLE_NAME = 'brands' // NOME DA TABELA IGUAL DO SQL

    public findAllBrands = async () : Promise<BrandDB[]>=> {
        const result = await BaseDatabase.connection(this.TABLE_NAME)
        return result
    }
}


// private TABLE_NAME = 'brands' // NOME DA TABELA IGUAL DO SQL
//     public findAllBrands = async () => {
//     const result = await BaseDatabase.connection(this.TABLE_NAME)
//     return result
// }