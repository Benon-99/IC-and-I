import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const password = 'IC&I@admin2024'; // Strong but memorable password
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const admin = await prisma.user.upsert({
      where: { email: 'icandicompany@gmail.com' },
      update: {},
      create: {
        name: 'iciadmin',
        email: 'icandicompany@gmail.com',
        password: hashedPassword,
        role: 'ADMIN'
      },
    });

    console.log('Admin user created:', admin);
  } catch (error) {
    console.error('Error creating admin user:', error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
