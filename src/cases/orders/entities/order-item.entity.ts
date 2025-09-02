import { Customer } from 'src/cases/customers/customer.entity';
import { Product } from 'src/cases/products/product.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Order } from './order.entity';

enum OrderStatus {
  NEW = 'NEW',
  SEPARATION = 'SEPARATION',
  INVOICED = 'INVOICED',
  SHIPPED = 'SHIPPED',
  DELIVERED = 'DELIVERED',
  CANCELED = 'CANCELED',
}

@Entity('order-item')
export class OrderItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Order)
  order: Order;

  @ManyToOne(() => Product, { eager: true, nullable: false })
  product: Product;

  @Column({ nullable: false })
  quantity: number;

  @Column('decimal', { nullable: false, precision: 10, scale: 2 })
  value: number;
}
