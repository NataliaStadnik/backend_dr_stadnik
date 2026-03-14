import { PrismaClient } from '../src/generated/client';
import { seedReviews } from './seeds/reviews.seed';

import 'dotenv/config';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool as any);
const prisma = new PrismaClient({ adapter });

async function main() {
  try {
    // Вызываем сиды по очереди
    await seedReviews(prisma);

    console.log('✅ All seeds completed successfully');
  } catch (e) {
    console.error('❌ Seed error:', e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((err) => {
  console.error('❌ Critical seed error:', err);
  process.exit(1);
});
