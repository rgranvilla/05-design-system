import { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@pigeonfy-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    size: 'md',
    children: `Make it happen.`,
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'Make it happen.',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'By default the heading will be an `h2` tag, but you can change it using property `as`',
      },
    },
  },
}
