import { Injectable } from "@nestjs/common";
import { Privilege } from "../userManagement/Privilege";

@Injectable()
export class UserManagementService {
  constructor() {}
  async AssignPrivilege(args: Privilege): Promise<string> {
    throw new Error("Not implemented");
  }
  async CreateUserRole(args: Privilege): Promise<string> {
    throw new Error("Not implemented");
  }
}
