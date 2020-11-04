import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "./Users.entity";
import { Articles } from "./Articles.entity";

@Index("userId", ["userId"], {})
@Index("articleId", ["articleId"], {})
@Entity("comments", { schema: "weblog" })
export class Comments {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "content", length: 200 })
  content: string;

  @Column("datetime", { name: "createdAt" })
  createdAt: Date;

  @Column("datetime", { name: "updatedAt" })
  updatedAt: Date;

  @Column("int", { name: "userId", nullable: true })
  userId: number | null;

  @Column("int", { name: "articleId", nullable: true })
  articleId: number | null;

  @ManyToOne(() => Users, (users) => users.comments, {
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "userId", referencedColumnName: "id" }])
  user: Users;

  @ManyToOne(() => Articles, (articles) => articles.comments, {
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "articleId", referencedColumnName: "id" }])
  article: Articles;
}
