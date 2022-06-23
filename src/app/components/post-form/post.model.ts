import {UserModel} from "../auth/user.model";

export interface PostModel {
  title?: string,
  content?: string,
  date: string,
  author: UserModel
}
