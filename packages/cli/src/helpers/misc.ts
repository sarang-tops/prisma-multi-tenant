import path from 'path'
import { fileExists } from '@prisma-multi-tenant-v2/shared'

export const useYarn = async (): Promise<boolean> => {
  if (await fileExists(path.join(process.cwd(), 'yarn.lock'))) {
    return true
  }
  if (await fileExists(path.join(process.cwd(), '../yarn.lock'))) {
    return true
  }
  return false
}
