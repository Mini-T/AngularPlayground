import {PostModel} from "../post-form/post.model";

export interface UserModel {
  id?: number,
  email: string,
  roles?: string[],
  password: string,
  posts?: PostModel
}
