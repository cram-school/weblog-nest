import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Articles } from "./Articles.entity";
import { BlackList } from "./BlackList.entity";
import { Comments } from "./Comments.entity";
import { Fans } from "./Fans.entity";
import { Photos } from "./Photos.entity";
import { Subscribes } from "./Subscribes.entity";

@Index("username", ["username"], { unique: true })
@Index("nick_name", ["nickName"], { unique: true })
@Index("phone", ["phone"], { unique: true })
@Index("email", ["email"], { unique: true })
@Entity("users", { schema: "weblog" })
export class Users {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "username", unique: true, length: 30 })
  username: string;

  @Column("varchar", { name: "nick_name", unique: true, length: 30 })
  nickName: string;

  @Column("varchar", { name: "password", length: 16 })
  password: string;

  @Column("int", { name: "age" })
  age: number;

  @Column("int", { name: "sex" })
  sex: number;

  @Column("varchar", { name: "address", length: 200 })
  address: string;

  @Column("varchar", { name: "phone", unique: true, length: 11 })
  phone: string;

  @Column("varchar", { name: "email", unique: true, length: 255 })
  email: string;

  @Column("varchar", { name: "avatar", length: 255 })
  avatar: string;

  @Column("datetime", { name: "createdAt" })
  createdAt: Date;

  @Column("datetime", { name: "updatedAt" })
  updatedAt: Date;

  @OneToMany(() => Articles, (articles) => articles.user)
  articles: Articles[];

  @OneToMany(() => BlackList, (blackList) => blackList.user)
  blackLists: BlackList[];

  @OneToMany(() => BlackList, (blackList) => blackList.blackList)
  blackLists2: BlackList[];

  @OneToMany(() => Comments, (comments) => comments.user)
  comments: Comments[];

  @OneToMany(() => Fans, (fans) => fans.user)
  fans: Fans[];

  @OneToMany(() => Fans, (fans) => fans.fans)
  fans2: Fans[];

  @OneToMany(() => Photos, (photos) => photos.user)
  photos: Photos[];

  @OneToMany(() => Subscribes, (subscribes) => subscribes.user)
  subscribes: Subscribes[];

  @OneToMany(() => Subscribes, (subscribes) => subscribes.subscribe)
  subscribes2: Subscribes[];
}
