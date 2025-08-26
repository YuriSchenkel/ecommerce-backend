import {
  Column,
  Entity,
  ForeignKey,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from '../categories/category.entity';
import { Brand } from '../brands/brand.entity';

@Entity('product')
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 255, nullable: false })
  name: string;

  @Column('text', { nullable: true })
  description: string;

  @Column('decimal', { precision: 10, scale: 2, nullable: false })
  price: number;

  @Column('boolean', { nullable: false, default: true })
  active: boolean;

  @ManyToOne(() => Category, { eager: true, nullable: false })
  categoryId: string;

  @ManyToOne(() => Brand, { eager: true, nullable: true })
  brandId: string;
}
