import 'dotenv/config';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.book.createMany({
    data: [
      { title: 'Clean Code', author: 'Robert C. Martin', priceCents: 3899 },
      { title: 'The Pragmatic Programmer', author: 'Andrew Hunt', priceCents: 3599 },
    ],
  })
}

main()
  .then(() => console.log('Seed data inserted ✅'))
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect())