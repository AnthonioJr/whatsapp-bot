const { spawnSync } = require('child_process')
const { existsSync, writeFileSync } = require('fs')

const SESSION_ID = 'levanter_Alwayslonely' // Edit this line only, don't remove ' <- this symbol

if (!existsSync('levanter')) {
  console.log('Cloning the repository...')
  const cloneResult = spawnSync(
    'git',
    ['clone', 'https://github.com/lyfe00011/levanter.git', 'levanter'],
    {
      stdio: 'inherit',
    }
  )

  if (cloneResult.error) {
    throw new Error(`Failed to clone the repository: ${cloneResult.error.message}`)
  }

  const configPath = 'levanter/config.env'
  try {
    console.log('Writing to config.env...')
    writeFileSync(configPath, `VPS=true\nSESSION_ID=${SESSION_ID}`)
  } catch (err) {
    throw new Error(`Failed to write to config.env: ${err.message}`)
