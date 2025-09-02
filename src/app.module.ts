import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './cases/categories/category.module';
import { BrandModule } from './cases/brands/brand.module';
import { ProductModule } from './cases/products/product.module';
import { CustomerModule } from './cases/customers/customer.module';
import { ConfigModule } from '@nestjs/config';
import { CityModule } from './cases/cities/module/city.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      database: process.env.DB_DATABASE,
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true,
    }),
    CategoryModule,
    BrandModule,
    ProductModule,
    CustomerModule,
    CityModule,
  ],
})
export class AppModule {}
