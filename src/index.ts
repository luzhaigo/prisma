import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: `${process.env.DATABASE_URL}?connection_limit=20&pool_timeout=10`
    },
  },
  log: ['query','info', 'warn', 'error']
})

async function main() {
  // await prisma.user.create({
  //   data: {
  //     name: 'Alice',
  //     email: 'alice@prisma.io',
  //     posts: {
  //       create: { title: 'Hello World' },
  //     },
  //     profile: {
  //       create: { bio: 'I like turtles' },
  //     },
  //   },
  // })

  // const allUsers = await prisma.user.findMany({
  //   include: {
  //     posts: true,
  //     profile: true,
  //   },
  // })
  // console.dir(allUsers, { depth: null })

  // const post = await prisma.post.update({
  //   select: null,
  //   where: { id: 1 },
  //   data: { published: true },
  // })
  // console.log(post)

  // const filteredPosts = await prisma.post.findMany({
  //   where: {
  //     OR: [{ title: { contains: 'hello' } }, { content: { contains: 'hello' } }],
  //   },
  // })
  // console.log(filteredPosts)

  // const post = await prisma.post.create({
  //   data: {
  //     title: 'Join us for Prisma Day 2020',
  //     author: {
  //       connect: { email: 'alice@prisma.io' },
  //     },
  //   },
  // })
  // console.log(post)

  // const posts = await prisma.profile
  // .findUnique({
  //   where: { id: 1 },
  // })
  // .user()
  // .posts()
  // console.log(posts)

  // const deletedUser = await prisma.user.delete({
  //   where: { email: 'sarah@prisma.io' },
  // })
  // console.log(deletedUser)

  await prisma.user.update({
    where: {
      id: 2
    },
    data: {
      posts: {
        connect: {
          id: 1
        }
      }
    }
  })
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })