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
  AuditTrail as PrismaAuditTrail,
  User as PrismaUser,
} from "@prisma/client";

export class AuditTrailServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AuditTrailCountArgs, "select">
  ): Promise<number> {
    return this.prisma.auditTrail.count(args);
  }

  async auditTrails(
    args: Prisma.AuditTrailFindManyArgs
  ): Promise<PrismaAuditTrail[]> {
    return this.prisma.auditTrail.findMany(args);
  }
  async auditTrail(
    args: Prisma.AuditTrailFindUniqueArgs
  ): Promise<PrismaAuditTrail | null> {
    return this.prisma.auditTrail.findUnique(args);
  }
  async createAuditTrail(
    args: Prisma.AuditTrailCreateArgs
  ): Promise<PrismaAuditTrail> {
    return this.prisma.auditTrail.create(args);
  }
  async updateAuditTrail(
    args: Prisma.AuditTrailUpdateArgs
  ): Promise<PrismaAuditTrail> {
    return this.prisma.auditTrail.update(args);
  }
  async deleteAuditTrail(
    args: Prisma.AuditTrailDeleteArgs
  ): Promise<PrismaAuditTrail> {
    return this.prisma.auditTrail.delete(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.auditTrail
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}