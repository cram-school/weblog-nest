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
@Index("subscribeId", ["subscribeId"], {})
@Entity("subscribes", { schema: "weblog" })
export class Subscribes {
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

  @Column("int", { name: "subscribeId", nullable: true })
  subscribeId: number | null;

  @ManyToOne(() => Users, (users) => users.subscribes, {
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "userId", referencedColumnName: "id" }])
  user: Users;

  @ManyToOne(() => Users, (users) => users.subscribes2, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "subscribeId", referencedColumnName: "id" }])
  subscribe: Users;
}
