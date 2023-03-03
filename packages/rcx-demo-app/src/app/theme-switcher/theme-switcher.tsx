import './theme-switcher.scss';

import { clarivateTheme } from '@cdx/theme-react-mui';
import ArrowRight from '@mui/icons-material/ArrowRight';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Box, Divider } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import * as React from 'react';

import {
  businessUnit1ETheme,
  businessUnit1FTheme,
  businessUnit2ETheme,
  businessUnit2FTheme,
  IntellectualPropertyTheme,
  IpmsTheme,
  liifeScienceTheme,
  productNameCTheme,
  ThemeOptionsWithBranding,
  workingGroupThemeSample,
} from '../../theme-samples/theme-react-mui';

interface TreeNode {
  id: number;
  label: string;
  value?: Partial<ThemeOptionsWithBranding>;
  children?: TreeNode[] | [];
}

export const themeOptions: TreeNode[] = [
  {
    id: 1,
    label: 'One Clarivate',
    value: clarivateTheme,
    children: [],
  },
  {
    id: 2,
    label: 'LS & H',
    children: [
      {
        id: 21,
        label: 'General',
        value: liifeScienceTheme,
        children: [],
      },
      {
        id: 22,
        label: 'Business unit 1B',
        children: [
          {
            id: 221,
            label: 'Working group 1',
            value: workingGroupThemeSample,
          },
          {
            id: 222,
            label: 'Working group 2',
            children: [
              {
                id: 2221,
                label: 'Product 1C',
                value: productNameCTheme,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    label: 'Academia and government',
    children: [
      {
        id: 31,
        label: 'General',
        value: IpmsTheme,
        children: [],
      },
      {
        id: 32,
        label: 'Business unit 1E',
        value: businessUnit1ETheme,
      },
      {
        id: 33,
        label: 'Business unit 2E',
        value: businessUnit2ETheme,
      },
    ],
  },
  {
    id: 4,
    label: 'Intellectual property',
    children: [
      {
        id: 41,
        label: 'General',
        value: IntellectualPropertyTheme,
      },
      {
        id: 42,
        label: 'Business unit 1F',
        value: businessUnit1FTheme,
      },
      {
        id: 43,
        label: 'Business unit 2F',
        value: businessUnit2FTheme,
      },
    ],
  },
];

type NestedListProps = {
  onThemeChange: (theme: Partial<ThemeOptionsWithBranding>) => void;
};

export default function NestedList(props: NestedListProps) {
  const { onThemeChange } = props;

  const [openIds, setOpenIds] = React.useState<number[]>([]);

  const [selectedId, setSelectedId] = React.useState<number>(1);

  const handleClick = (
    id: number,
    theme?: Partial<ThemeOptionsWithBranding>,
  ) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((i) => i !== id));
    } else {
      setOpenIds([...openIds, id]);
    }

    if (onThemeChange && theme) {
      onThemeChange(theme);
      setSelectedId(id);
    }
  };

  const renderOptions = (options?: TreeNode[], level = 0) => {
    return options?.map((option) => {
      const hasChildren = option?.children && option.children.length > 0;
      const isOpen = openIds.includes(option.id);

      return (
        <React.Fragment key={option.id}>
          {[2, 3, 4].includes(option.id) && <Divider />}
          <ListItemButton
            onClick={() => handleClick(option.id, option?.value)}
            className={
              'list-item ' +
              (selectedId === option.id ? 'selected' : 'not-selected')
            }
            sx={{ pl: level * 2 }}
          >
            <ListItemIcon></ListItemIcon>
            {!hasChildren && (
              <Box className="selected__icon">
                {selectedId === option.id && <ArrowRight color="primary" />}
              </Box>
            )}

            <ListItemText primary={option.label} />
            {hasChildren && (isOpen ? <ExpandLess /> : <ExpandMore />)}
          </ListItemButton>
          {hasChildren && (
            <Collapse in={isOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {renderOptions(option?.children, level + 1)}
              </List>
            </Collapse>
          )}
        </React.Fragment>
      );
    });
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Select the theme
        </ListSubheader>
      }
    >
      {renderOptions(themeOptions)}
    </List>
  );
}
