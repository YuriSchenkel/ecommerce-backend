import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      database: 'postgres',
      type: 'postgres',
      host: 'aws-0-sa-east-1.pooler.supabase.com',
      port: +'5432',
      username: 'postgres.zyuailwwnnhplirqxgkn',
      password: 'programacao123',
      autoLoadEntities: true,
    }),
  ],
})
export class AppModule {}
