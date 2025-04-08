import { Base } from '../base.model';

export class User extends Base {
  userName: string | null;
  password: string | null;
  name: string | null;
  surname: string | null;
  email?: string | null;
  phone?: string | null;
  profilePhoto?: string | null;
  birthdate?: Date | null;
  roleId: string | null;
  token?: string | null;

  constructor() {
    super();
    this.userName = null;
    this.password = null;
    this.name = null;
    this.surname = null;
    this.email = null;
    this.phone = null;
    this.profilePhoto = null;
    this.birthdate = null;
    this.roleId = null;
    this.token = null;
  }
}
