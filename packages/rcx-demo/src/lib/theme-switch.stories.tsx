// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import ThemeSwitchApp from '../../../rcx-demo-app/src/app/app';

const Story = {
  component: ThemeSwitchApp,
  title: 'ThemeSwitchApp',
};
export default Story;

export function ThemeSwitch() {
  return <ThemeSwitchApp />;
}
