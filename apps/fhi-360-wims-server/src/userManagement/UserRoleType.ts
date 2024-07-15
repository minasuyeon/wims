import { registerEnumType } from "@nestjs/graphql";

export enum UserRoleType {
    SuperAdmin = "SuperAdmin",
    Admin = "Admin",
    FacilitySupport = "FacilitySupport",
    ItSupport = "ITSupport"
}

registerEnumType(UserRoleType, {
    name: "UserRoleType",
  });