import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "./Users.entity";
import { CollectList } from "./CollectList.entity";
import { Comments } from "./Comments.entity";
import { LikeList } from "./LikeList.entity";
import { Photos } from "./Photos.entity";

@Index("userId", ["userId"], {})
@Entity("articles", { schema: "weblog" })
export class Articles {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "title", length: 255 })
  title: string;

  @Column("int", { name: "amount" })
  amount: number;

  @Column("text", { name: "desc", nullable: true })
  desc: string | null;

  @Column("text", { name: "content" })
  content: string;

  @Column("datetime", { name: "createdAt" })
  createdAt: Date;

  @Column("datetime", { name: "updatedAt" })
  updatedAt: Date;

  @Column("int", { name: "userId", nullable: true })
  userId: number | null;

  @ManyToOne(() => Users, (users) => users.articles, {
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "userId", referencedColumnName: "id" }])
  user: Users;

  @OneToMany(() => CollectList, (collectList) => collectList.article)
  collectLists: CollectList[];

  @OneToMany(() => Comments, (comments) => comments.article)
  comments: Comments[];

  @OneToMany(() => LikeList, (likeList) => likeList.article)
  likeLists: LikeList[];

  @OneToMany(() => Photos, (photos) => photos.article)
  photos: Photos[];
}
