import type { Meta, StoryObj } from '@storybook/react'
import { Header } from './Header'

const meta: Meta<typeof Header> = {
  title: 'UI/Components/Header',
  // component: Header,
  tags: ['docsPage']
}

export default meta
type Story = StoryObj<typeof Header>

export const Primary: Story = {
  args: {
    primary: true
  }
}
