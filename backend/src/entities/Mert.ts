import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

@ObjectType()
@Entity()
export class Mert extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Field()
  @Column("varchar", { length: "144" })
  mert!: string;

  @Field()
  @CreateDateColumn()
  createdAt!: string;

  @Field()
  @Column("text", { nullable: true })
  picture?: string;

  @Field()
  @Column("numeric", { default: 0 })
  likes?: number;

  @Field()
  @Column("numeric", { default: 0 })
  dislikes?: number;

  @Field()
  @Column("uuid", { nullable: true })
  fatherId!: string;

  @Field()
  @Column("uuid", { nullable: true })
  userId!: string;

  @Field(() => User)
  @ManyToOne(() => User, (u) => u.merts)
  user?: User;

  @Field(() => Mert, { nullable: true })
  @OneToOne(() => Mert, { nullable: true })
  father?: Mert;
}
