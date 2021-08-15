/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { generateScssVariableFile } from './../../utils/theme-maker/src'

generateScssVariableFile({ prefix: 'wa', output: './libs/ui-antd/src/style/_generated.scss' })
