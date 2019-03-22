import { kpy } from 'kpy'
import { cfgOverwriteDir } from './cnst/paths.cnst'

export async function updateFromSharedModuleCommand (): Promise<void> {
  await kpy({
    baseDir: cfgOverwriteDir,
    outputDir: './',
    dotfiles: true,
    verbose: true,
  })
}
