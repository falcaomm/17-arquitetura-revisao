import express from 'express'
import { BrandController } from '../controller/BrandController'
import { BrandDatabase } from '../database/BrandDatabase'
import { BrandBusiness } from '../business/BrandBusiness'

export const brandRouter = express.Router()

const brandDatabase = new BrandDatabase()
const brandBusinnes = new BrandBusiness(brandDatabase)
const brandController = new BrandController(brandBusinnes)

brandRouter.get("/", brandController.findAllBrands)
brandRouter.post("/",)