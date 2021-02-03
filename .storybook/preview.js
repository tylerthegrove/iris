import { addDecorator } from '@storybook/react';

import { themes } from './themes';
import { withGlobalStyles } from './decorators/withGlobalStyles';
import { withThemes, addThemes } from './addons/themes/code';

const categoryOrder = [
  'iris',
  'color',
  'components',
  'typography',
  'layout',
  'icons',
  'illustration',
  'motion',
  'utilties',
  'themes',
  'labs',
];

const getOrder = (header) =>
  categoryOrder.findIndex((h) => h === header);
const defaultSort = (a, b) =>
  a[1].id.localeCompare(b[1].id, undefined, { numeric: true });
const stripCategory = (story) =>
  story[1].kind.substr(0, story[1].kind.indexOf('/')).toLowerCase();

function storySort(cur, next) {
  const a = stripCategory(cur);
  const b = stripCategory(next);

  if (a !== b) return getOrder(a) - getOrder(b);

  // order stories Props, then Examples, then Index
  if (cur[1]?.id.includes('index')) return 1;
  if (next[1]?.id.includes('index')) return -1;

  if (cur[1]?.id.includes('examples')) return 1;
  if (next[1]?.id.includes('examples')) return -1;

  if (cur[1]?.id.includes('props')) return 1;
  if (next[1]?.id.includes('props')) return -1;

  return defaultSort(cur, next);
}

addThemes(themes);
addDecorator(withThemes);
addDecorator(withGlobalStyles);

export const parameters = {
  options: { storySort },
  controls: { expanded: true, hideNoControlsWarning: true },
  docs: { page: null },
  argTypes: {
    'aria-activedescendant': {
      table: {
        disable: true,
      },
    },
    'aria-atomic': {
      table: {
        disable: true,
      },
    },
    'aria-autocomplete': {
      table: {
        disable: true,
      },
    },
    'aria-busy': {
      table: {
        disable: true,
      },
    },
    'aria-checked': {
      table: {
        disable: true,
      },
    },
    'aria-colcount': {
      table: {
        disable: true,
      },
    },
    'aria-colindex': {
      table: {
        disable: true,
      },
    },
    'aria-colspan': {
      table: {
        disable: true,
      },
    },
    'aria-controls': {
      table: {
        disable: true,
      },
    },
    'aria-current': {
      table: {
        disable: true,
      },
    },
    'aria-describedby': {
      table: {
        disable: true,
      },
    },
    'aria-details': {
      table: {
        disable: true,
      },
    },
    'aria-disabled': {
      table: {
        disable: true,
      },
    },
    'aria-dropeffect': {
      table: {
        disable: true,
      },
    },
    'aria-errormessage': {
      table: {
        disable: true,
      },
    },
    'aria-expanded': {
      table: {
        disable: true,
      },
    },
    'aria-flowto': {
      table: {
        disable: true,
      },
    },
    'aria-grabbed': {
      table: {
        disable: true,
      },
    },
    'aria-haspopup': {
      table: {
        disable: true,
      },
    },
    'aria-hidden': {
      table: {
        disable: true,
      },
    },
    'aria-invalid': {
      table: {
        disable: true,
      },
    },
    'aria-keyshortcuts': {
      table: {
        disable: true,
      },
    },
    'aria-label': {
      table: {
        disable: true,
      },
    },
    'aria-labelledby': {
      table: {
        disable: true,
      },
    },
    'aria-level': {
      table: {
        disable: true,
      },
    },
    'aria-live': {
      table: {
        disable: true,
      },
    },
    'aria-modal': {
      table: {
        disable: true,
      },
    },
    'aria-multiline': {
      table: {
        disable: true,
      },
    },
    'aria-multiselectable': {
      table: {
        disable: true,
      },
    },
    'aria-orientation': {
      table: {
        disable: true,
      },
    },
    'aria-owns': {
      table: {
        disable: true,
      },
    },
    'aria-placeholder': {
      table: {
        disable: true,
      },
    },
    'aria-posinset': {
      table: {
        disable: true,
      },
    },
    'aria-pressed': {
      table: {
        disable: true,
      },
    },
    'aria-readonly': {
      table: {
        disable: true,
      },
    },
    'aria-relevant': {
      table: {
        disable: true,
      },
    },
    'aria-required': {
      table: {
        disable: true,
      },
    },
    'aria-roledescription': {
      table: {
        disable: true,
      },
    },
    'aria-rowcount': {
      table: {
        disable: true,
      },
    },
    'aria-rowindex': {
      table: {
        disable: true,
      },
    },
    'aria-rowspan': {
      table: {
        disable: true,
      },
    },
    'aria-selected': {
      table: {
        disable: true,
      },
    },
    'aria-setsize': {
      table: {
        disable: true,
      },
    },
    'aria-sort': {
      table: {
        disable: true,
      },
    },
    'aria-valuemax': {
      table: {
        disable: true,
      },
    },
    'aria-valuemin': {
      table: {
        disable: true,
      },
    },
    'aria-valuenow': {
      table: {
        disable: true,
      },
    },
    'aria-valuetext': {
      table: {
        disable: true,
      },
    },

    role: {
      table: {
        disable: true,
      },
    },
    onBlur: {
      table: {
        disable: true,
      },
    },
    onClick: {
      table: {
        disable: true,
      },
    },
    onFocus: {
      table: {
        disable: true,
      },
    },
    onMouseEnter: {
      table: {
        disable: true,
      },
    },
    onMouseLeave: {
      table: {
        disable: true,
      },
    },
    alt: {
      table: {
        disable: true,
      },
    },
    as: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
    data: {
      table: {
        disable: true,
      },
    },
    debug: {
      table: {
        disable: true,
      },
    },
    disabled: {
      table: {
        disable: true,
      },
    },
    forwardRef: {
      table: {
        disable: true,
      },
    },
    hidden: {
      table: {
        disable: true,
      },
    },
    id: {
      table: {
        disable: true,
      },
    },
    lang: {
      table: {
        disable: true,
      },
    },
    name: {
      table: {
        disable: true,
      },
    },
    style: {
      table: {
        disable: true,
      },
    },
    tabIndex: {
      table: {
        disable: true,
      },
    },
    title: {
      table: {
        disable: true,
      },
    },
    test: {
      table: {
        disable: true,
      },
    },
    theme: {
      table: {
        disable: true,
      },
    },
    accept: {
      table: {
        disable: true,
      },
    },
    autocomplete: {
      table: {
        disable: true,
      },
    },
    autoFocus: {
      table: {
        disable: true,
      },
    },
    capture: {
      table: {
        disable: true,
      },
    },
    checked: {
      table: {
        disable: true,
      },
    },
    crossOrigin: {
      table: {
        disable: true,
      },
    },
    defaultChecked: {
      table: {
        disable: true,
      },
    },
    defaultValue: {
      table: {
        disable: true,
      },
    },
    indeterminate: {
      table: {
        disable: true,
      },
    },
    max: {
      table: {
        disable: true,
      },
    },
    maxLength: {
      table: {
        disable: true,
      },
    },
    min: {
      table: {
        disable: true,
      },
    },
    minLength: {
      table: {
        disable: true,
      },
    },
    mirror: {
      table: {
        disable: true,
      },
    },
    multiple: {
      table: {
        disable: true,
      },
    },
    name: {
      table: {
        disable: true,
      },
    },
    onChange: {
      table: {
        disable: true,
      },
    },
    onKeyDown: {
      table: {
        disable: true,
      },
    },
    onKeyUp: {
      table: {
        disable: true,
      },
    },
    pattern: {
      table: {
        disable: true,
      },
    },
    placeholder: {
      table: {
        disable: true,
      },
    },
    readOnly: {
      table: {
        disable: true,
      },
    },
    required: {
      table: {
        disable: true,
      },
    },
    step: {
      table: {
        disable: true,
      },
    },
    type: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
  },
};
