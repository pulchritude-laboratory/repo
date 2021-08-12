import { ThemeKeyMaker, ThemeVariableSegments } from '../'
import * as fs from 'fs'

const { steps, components, colorTypes, colorVariants, shadowTypes, borderTypes, delayDurations } =
  ThemeVariableSegments

interface ExternalConfig {
  output?: string
  prefix?: string
}

interface Config {
  parsers: typeof ThemeKeyMaker
}

export function generateScssVariableFile(externalConfig: ExternalConfig) {
  const config: Config = {
    parsers: {
      color: (t, v) => `$color-${t}-${v}`,
      backgroundColor: c => `$color-bg-${c}`,
      borderColor: c => `$border-color-${c}`,
      borderRadius: r => `$border-radius-${r}`,
      shadow: t => `$shadow-${t}`,
      lightAngle: () => `$light-angle`,
      delayDuration: d => `$delay-duration-${d}`
    }
  }

  const makeLine = (k: string, v: string) =>
    `${k}: var(${v.replace('--', externalConfig.prefix ? `--${externalConfig.prefix}-` : '--')});\n`

  const makePropLine = (k: string, v: string) =>
    `  "${k}": var(${v.replace(
      '--',
      externalConfig.prefix ? `--${externalConfig.prefix}-` : '--'
    )}),\n`

  let content = '// generated file\n'

  content += '\n@use "sass:map";\n'

  content +=
    '\n$color-types:' +
    colorTypes.reduce<string>((acc, cur, i) => {
      acc += `${i ? ', ' : ' '}${cur}`
      return acc
    }, '') +
    ';\n\n'

  colorTypes.forEach(type => {
    colorVariants.forEach(variant => {
      content += makeLine(config.parsers.color(type, variant), ThemeKeyMaker.color(type, variant))
    })
    content += '\n'
  })

  content += '\n'
  colorTypes.forEach(type => {
    content += `$color-${type}: (\n`
    content += `  "type": ${type},\n`

    colorVariants.forEach(variant => {
      content += makePropLine(variant, ThemeKeyMaker.color(type, variant))
    })

    content += `);\n`
  })

  content += '\n'
  steps.forEach(type => {
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

  content += '\n'
  components.forEach(c => {
    content += makeLine(config.parsers.borderRadius(c), ThemeKeyMaker.borderRadius(c))
  })

  content += '\n'
  delayDurations.forEach(d => {
    content += makeLine(config.parsers.delayDuration(d), ThemeKeyMaker.delayDuration(d))
  })

  content += '\n'
  content += makeLine(config.parsers.lightAngle(), ThemeKeyMaker.lightAngle())

  if (externalConfig.output) {
    fs.writeFileSync(externalConfig.output, content)
  }
}
