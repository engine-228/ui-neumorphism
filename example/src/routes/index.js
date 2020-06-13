import {
  Home,
  Example,
  FabView,
  CardView,
  ChipView,
  FormView,
  TableView,
  RadioView,
  BadgeView,
  AvatarView,
  SelectView,
  ButtonView,
  SwitchView,
  SliderView,
  TooltipView,
  DividerView,
  CheckboxView,
  TextFieldView,
  IconButtonView,
  TypographyView,
  ToggleButtonView,
  ProgressLinearView,
  ProgressCircularView
} from '../pages/index.js'

const routes = [
  {
    id: 1,
    path: '/',
    name: '',
    component: Home
  },
  {
    id: 22,
    path: '/avatar',
    name: 'Avatar',
    component: AvatarView
  },
  {
    id: 25,
    path: '/badge',
    name: 'Badge',
    component: BadgeView
  },
  {
    id: 4,
    path: '/button',
    name: 'Buttons',
    component: ButtonView
  },
  {
    id: 11,
    path: '/fab',
    name: 'Buttons: Floating Action Button',
    component: FabView
  },
  {
    id: 12,
    path: '/button-icon',
    name: 'Buttons: Icon Button',
    component: IconButtonView
  },
  {
    id: 13,
    path: '/button-toggle',
    name: 'Buttons: Toggle Button',
    component: ToggleButtonView
  },
  {
    id: 3,
    path: '/card',
    name: 'Card',
    component: CardView
  },
  {
    id: 23,
    path: '/chip',
    name: 'Chip',
    component: ChipView
  },
  {
    id: 8,
    path: '/checkbox',
    name: 'Checkbox',
    component: CheckboxView
  },
  {
    id: 15,
    path: '/divider',
    name: 'Divider',
    component: DividerView
  },
  {
    id: 18,
    path: '/form',
    name: 'Form',
    component: FormView
  },
  {
    id: 9,
    path: '/text-field',
    name: 'Input: Text Field',
    component: TextFieldView
  },
  {
    id: 16,
    path: '/progress-linear',
    name: 'Progress: Linear',
    component: ProgressLinearView
  },
  {
    id: 17,
    path: '/progress-circular',
    name: 'Progress: Circular',
    component: ProgressCircularView
  },
  {
    id: 5,
    path: '/radio',
    name: 'Radio',
    component: RadioView
  },
  {
    id: 21,
    path: '/Select',
    name: 'Select',
    component: SelectView
  },
  {
    id: 21,
    path: '/slider',
    name: 'Slider',
    component: SliderView
  },
  {
    id: 7,
    path: '/switch',
    name: 'Switch',
    component: SwitchView
  },
  {
    id: 19,
    path: '/table',
    name: 'Table',
    component: TableView
  },
  {
    id: 22,
    path: '/tooltip',
    name: 'Tooltip',
    component: TooltipView
  },
  {
    id: 10,
    path: '/typography',
    name: '',
    component: TypographyView
  },
  {
    id: 100,
    path: '/examples',
    name: '',
    component: Example
  },
  {
    id: 100,
    path: '*',
    name: '',
    component: Home
  }
]

export default routes
