import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "./Users.entity";

@Index("userId", ["userId"], {})
@Index("black_listId", ["blackListId"], {})
@Entity("black_list", { schema: "weblog" })
export class BlackList {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "remark", nullable: true, length: 255 })
  remark: string | null;

  @Column("datetime", { name: "createdAt" })
  createdAt: Date;

  @Column("datetime", { name: "updatedAt" })
  updatedAt: Date;

  @Column("int", { name: "userId", nullable: true })
  userId: number | null;

  @Column("int", { name: "black_listId", nullable: true })
  blackListId: number | null;

  @ManyToOne(() => Users, (users) => users.blackLists, {
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "userId", referencedColumnName: "id" }])
  user: Users;

  @ManyToOne(() => Users, (users) => users.blackLists2, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "black_listId", referencedColumnName: "id" }])
  blackList: Users;
}
