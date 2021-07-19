import { Story, Meta } from '@storybook/react'
import { Button, ButtonProps } from './Button'

export default {
  component: Button,
  title: 'Basic/Button',
  argTypes: {
    title: {
      description: 'Text of the button.',
      control: 'text'
    },
    type: {
      description: 'Type of the button.',
      table: {
        category: 'Style'
      },
      control: 'select'
    },
    shape: {
      description: 'Shape of the button.',

      control: { type: 'select' },
      table: {
        category: 'Style'
      }
    },
    color: {
      description: 'Hex code of the color.',
      table: {
        category: 'Style',
        defaultValue: { summary: '#112233' }
      },
      control: 'color'
    }
  }
} as Meta

const Template: Story<ButtonProps> = args => <Button {...args} />

export const Default = Template.bind({})

export const SetType = Template.bind({})
SetType.args = {
  type: 'primary'
}

export const SetColor = Template.bind({})
SetColor.args = {
  color: '#ff0000'
}

export const SetShape = Template.bind({})
SetShape.args = {
  shape: 'round'
}

export const SetTitle = Template.bind({})
SetTitle.args = {
  title: 'Button text'
}
