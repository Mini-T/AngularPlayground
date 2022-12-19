import {PostModel} from "../post-form/post.model";

export interface UserModel {
  id?: number,
  email?: string,
  roles?: Roles,
  username?:string
  password?: string,
  posts?: PostModel
}
export enum Roles {
  ROLE_ADMIN = 'ROLE_ADMIN',
  ROLE_USER = 'ROLE_USER'
}
