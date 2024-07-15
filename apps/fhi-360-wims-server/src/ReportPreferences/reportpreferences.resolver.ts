import * as graphql from "@nestjs/graphql";
import { ReportPreferencesService } from "./reportpreferences.service";

export class ReportPreferencesResolver {
  constructor(protected readonly service: ReportPreferencesService) {}
}
