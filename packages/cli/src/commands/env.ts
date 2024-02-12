import { Management, spawnShell } from '@prisma-multi-tenant-v2/shared'

import { Command, CommandArguments } from '../types'

class Env implements Command {
  name = 'env'
  args = [
    {
      name: 'name',
      description: 'Name of the tenant you want in your env',
    },
  ]
  description = 'Set env variables for a specific tenant'

  async execute(args: CommandArguments, management: Management) {
    const [name] = args.args

    console.log(`\n  Running \`${args.secondary}\` on tenant "${name}"\n`)

    const tenant = await management.read(name)

    process.env.DATABASE_URL = tenant.url

    spawnShell(args.secondary).then((exitCode) => process.exit(exitCode))
  }
}

export default new Env()
