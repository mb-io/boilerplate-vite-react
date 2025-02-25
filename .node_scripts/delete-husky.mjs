import { createRequire } from 'module'
const require = createRequire(import.meta.url)

const fs = require('fs')
const dir = '.husky/_/'

if (fs.existsSync(dir)) {
  fs.rmdirSync(dir, { recursive: true }, (err) => {
    if (err) throw err
  })
  console.log(dir + ' has been removed.')
}
