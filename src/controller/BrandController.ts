import { Request, Response } from "express"
import { ZodError } from "zod";
import { BaseError } from "../error/BaseError";
import { BrandBusiness } from "../business/BrandBusiness";

export class BrandController {
    constructor(
        private brandBusinnes: BrandBusiness
    ) {}

    public findAllBrands = async (req: Request, res: Response) : Promise <void> => {
        try {
            const result = await this.brandBusinnes.findAllBrands()
            res.status(200).send(result)

        } catch (error) {
            if (error instanceof ZodError) {
                res.status(400).send(error.issues);
            } else if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message);
            } else {
                res.status(500).send("Erro inesperado");
            }
        }
    }
} 



// export class BrandController {
//     public findAllBrands = async (req: Request, res: Response) => {
//         try {
//             res.status(200).send('sucesso')
//         } catch (error) {
//             if (error instanceof ZodError) {
//                 res.status(400).send(error.issues);
//             } else if (error instanceof BaseError) {
//                 res.status(error.statusCode).send(error.message);
//             } else {
//                 res.status(500).send("Erro inesperado");
//             }
//         }
//     }
// } 