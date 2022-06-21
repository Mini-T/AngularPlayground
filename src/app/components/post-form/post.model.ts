import {UserModel} from "../auth/user.model";

export interface PostModel {
  title?: string,
  content?: string,
  date: Date,
  author: UserModel
}
