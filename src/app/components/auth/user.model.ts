import {PostModel} from "../post-form/post.model";

export interface UserModel {
  id?: number,
  email: string,
  roles?: string[],
  username?:string
  password?: string,
  posts?: PostModel
}
