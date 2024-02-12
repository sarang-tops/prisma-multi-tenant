import { PrismaClient } from '@prisma/client'

export { MultiTenant } from '@prisma-multi-tenant-v2/client'

export const fromContext = (): PrismaClient =>
  new Proxy(new PrismaClient(), {
    get: (target, prop) => {
      const { db } = require('@redwoodjs/api').context
      return db[prop]
    },
  })
