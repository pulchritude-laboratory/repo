import { ThemeKeyMaker, ThemeVariableSegments } from '../theme'
import * as fs from 'fs'

const { backgroundTypes, colorTypes, colorVariants, shadowTypes, borderTypes } =
  ThemeVariableSegments

interface Parsers {
  color: (...args: Parameters<typeof ThemeKeyMaker.color>) => string
  backgroundColor: (...args: Parameters<typeof ThemeKeyMaker.backgroundColor>) => string
  borderColor: (...args: Parameters<typeof ThemeKeyMaker.borderColor>) => string
  shadow: (...args: Parameters<typeof ThemeKeyMaker.shadow>) => string
}

interface ExternalConfig {
  output?: string
  prefix?: string
}

interface Config {
  parsers: Parsers
}

export function generateScssVariableFile(externalConfig: ExternalConfig) {
  const config: Config = {
    parsers: {
      color: (t, v) => `$color-${t}-${v}`,
      backgroundColor: t => `$color-bg-${t}`,
      borderColor: t => `$color-border-${t}`,
      shadow: t => `$shadow-${t}`
    }
  }

  const makeLine = (k: string, v: string) =>
    `${k}: var(${v.replace('--', externalConfig.prefix ? `--${externalConfig.prefix}-` : '--')});\n`

  let content = '// generated file\n'

  colorTypes.forEach(type => {
    colorVariants.forEach(variant => {
      content += makeLine(config.parsers.color(type, variant), ThemeKeyMaker.color(type, variant))
    })
  })

  content += '\n'
  backgroundTypes.forEach(type => {
    content += makeLine(config.parsers.backgroundColor(type), ThemeKeyMaker.backgroundColor(type))
  })

  content += '\n'
  borderTypes.forEach(type => {
    content += makeLine(config.parsers.borderColor(type), ThemeKeyMaker.borderColor(type))
  })

  content += '\n'
  shadowTypes.forEach(type => {
    content += makeLine(config.parsers.shadow(type), ThemeKeyMaker.shadow(type))
  })

  console.log(content)
  console.log(externalConfig)
  console.log(fs)
  if (externalConfig.output) {
    const file = fs.writeFileSync(externalConfig.output, content)
  }
}

// const args = process.argv.slice(2).reduce<ExternalConfig>((acc, raw) => {
//   if (raw.startsWith('--')) {
//     const [k, v] = raw.replace('--', '').split('=')
//     acc = { ...acc, [k]: v }
//   }
//   return acc
// }, {})

// console.log(args)

// run(args)

// export const scripts {}
