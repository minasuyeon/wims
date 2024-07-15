/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Prediction as PrismaPrediction,
  Product as PrismaProduct,
} from "@prisma/client";

export class PredictionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PredictionCountArgs, "select">
  ): Promise<number> {
    return this.prisma.prediction.count(args);
  }

  async predictions(
    args: Prisma.PredictionFindManyArgs
  ): Promise<PrismaPrediction[]> {
    return this.prisma.prediction.findMany(args);
  }
  async prediction(
    args: Prisma.PredictionFindUniqueArgs
  ): Promise<PrismaPrediction | null> {
    return this.prisma.prediction.findUnique(args);
  }
  async createPrediction(
    args: Prisma.PredictionCreateArgs
  ): Promise<PrismaPrediction> {
    return this.prisma.prediction.create(args);
  }
  async updatePrediction(
    args: Prisma.PredictionUpdateArgs
  ): Promise<PrismaPrediction> {
    return this.prisma.prediction.update(args);
  }
  async deletePrediction(
    args: Prisma.PredictionDeleteArgs
  ): Promise<PrismaPrediction> {
    return this.prisma.prediction.delete(args);
  }

  async getProduct(parentId: string): Promise<PrismaProduct | null> {
    return this.prisma.prediction
      .findUnique({
        where: { id: parentId },
      })
      .product();
  }
}
