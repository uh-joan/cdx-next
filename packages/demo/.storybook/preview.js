// this is a total hack from https://github.com/storybookjs/storybook/issues/15855#issuecomment-908870626
// we might also be able to use a decorator https://storybook.js.org/docs/react/writing-stories/decorators#global-decorators, but this approach had less moving parts
// to avoid this for the "real" version, we simply need to make this an app type instead of a library

export const parameters = {
  docs: {
    inlineStories: true,
  },
};
