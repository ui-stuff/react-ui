import { StoryFn, Meta } from "@storybook/react"
import Rating from "./Rating"

export default {
  component: Rating,
} as Meta<typeof Rating>

const Template: StoryFn<typeof Rating> = (args) => <Rating {...args} />

export const RatingTest = Template.bind({})
RatingTest.args = {
  title: "Default theme",
  theme: "primary",
  testIdPrefix: "rating",
}

export const RatingSecondary = Template.bind({})
RatingSecondary.args = {
  title: "Secondary theme",
  theme: "secondary",
  testIdPrefix: "rating",
}
