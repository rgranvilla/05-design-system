import { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@devtrails-ui/react'

export default {
  title: 'Surface/Box',
  component: Box,
  args: {
    children: (
      <>
        <Text>
          The most attractive accessory someone can have is confidence.
        </Text>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
