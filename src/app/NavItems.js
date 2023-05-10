import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import AssignmentIcon from '@mui/icons-material/Assignment';

import { protectedRoutes } from './routes';
import { useMeQuery } from 'api/authApi';

const mainNavItem = (route) => (
  <NavLink to={route.path} key={route.path}>
    <ListItemButton>
      <ListItemIcon>
        {route.navItem.icon}
      </ListItemIcon>
      <ListItemText primary={route.navItem.text} />
    </ListItemButton>
  </NavLink>
);

export function MainNavItems() {
  const { data: me = null } = useMeQuery();
  
  if (!me) return <></>;

  const navItems = [];
  protectedRoutes.forEach(route => {
    // No nav for this route
    if (!route.navItem) return;

    // No specific roles assigned to this route
    if (!Array.isArray(route.allowedRoles) || route.allowedRoles.length === 0) {
      navItems.push(mainNavItem(route));
      return;
    }

    // Check if the current logged user authorized
    const authorized = me.roles.find(role => route.allowedRoles.includes(role.role));
    if (authorized) {
      navItems.push(mainNavItem(route));
      return;
    }
  });

  return (
    <Fragment>
      {navItems}
    </Fragment>
  );
}

export const secondaryListItems = (
  <Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </Fragment>
);