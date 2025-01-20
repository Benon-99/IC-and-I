import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Create admin user
  const admin = await prisma.user.create({
    data: {
      name: "Admin User",
      email: "admin@example.com",
      password: "hashedpassword", // In production, this should be properly hashed
      role: "ADMIN"
    }
  });

  // Create categories
  const hrManagement = await prisma.category.create({
    data: { name: "HR Management" }
  });

  const technology = await prisma.category.create({
    data: { name: "Technology" }
  });

  const digitalInnovation = await prisma.category.create({
    data: { name: "Digital Innovation" }
  });

  // Create blog posts
  await prisma.post.createMany({
    data: [
      {
        title: "5 Key Strategies for Effective HR Management in 2024",
        content: "Sample content for HR Management post...",
        slug: "5-key-strategies-for-effective-hr-management-in-2024",
        categoryId: hrManagement.id,
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80",
        published: true,
        authorId: admin.id,
      },
      {
        title: "The Role of Cybersecurity in Modern Business",
        content: "Sample content for Cybersecurity post...",
        slug: "the-role-of-cybersecurity-in-modern-business",
        categoryId: technology.id,
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
        published: true,
        authorId: admin.id,
      },
      {
        title: "How Digital Transformation is Shaping the Future of Business in Syria",
        content: "Sample content for Digital Transformation post...",
        slug: "how-digital-transformation-is-shaping-the-future-of-business-in-syria",
        categoryId: digitalInnovation.id,
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
        published: true,
        authorId: admin.id,
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });