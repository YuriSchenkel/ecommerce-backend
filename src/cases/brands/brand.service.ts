import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Brand } from './brand.entity';

@Injectable()
export class BrandService {
  constructor(
    @InjectRepository(Brand)
    private repository: Repository<Brand>,
  ) {}

  findAll(): Promise<Brand[]> {
    return this.repository.find();
  }

  async findById(id: string): Promise<Brand | null> {
    return this.repository.findOneBy({ id });
  }

  async save(brand: Brand): Promise<Brand> {
    return this.repository.save(brand);
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
