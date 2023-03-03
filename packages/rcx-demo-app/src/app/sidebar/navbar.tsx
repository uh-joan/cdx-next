import './navbar.scss';

import { Button, Divider, Paper } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';

import { Cog as CogIcon } from '../../icons/cog';
import { Lock as LockIcon } from '../../icons/lock';
import { User as UserIcon } from '../../icons/user';
import { Users as UsersIcon } from '../../icons/users';
import { XCircle as XCircleIcon } from '../../icons/x-circle';

const NavBar = () => {
  const location = useLocation().pathname;
  const isCurrentPage = (path: string) => {
    return location === path ? 'current-page' : '';
  };
  return (
    <nav className="nav-container">
      <Paper>
        <Divider />

        <NavLink className="nav-container__link" to="/customers">
          <Button
            className={`nav-container__button ${isCurrentPage('/customers')}`}
            startIcon={<UsersIcon />}
            disableRipple
            sx={{
              justifyContent: 'flex-start',
              px: 3,
            }}
          >
            Alumns
          </Button>
        </NavLink>

        <Divider />

        <NavLink className="nav-container__link" to="/account">
          <Button
            className={`nav-container__button ${isCurrentPage('/account')}`}
            startIcon={<UserIcon />}
            disableRipple
            sx={{
              justifyContent: 'flex-start',
              px: 3,
            }}
          >
            Account
          </Button>
        </NavLink>

        <Divider />

        <NavLink className="nav-container__link" to="/settings">
          <Button
            className={`nav-container__button ${isCurrentPage('/settings')}`}
            startIcon={<CogIcon />}
            disableRipple
            sx={{
              justifyContent: 'flex-start',
              px: 3,
            }}
          >
            Settings
          </Button>
        </NavLink>

        <Divider />

        <NavLink className="nav-container__link" to="/login">
          <Button
            className={`nav-container__button ${isCurrentPage('/login')}`}
            startIcon={<LockIcon />}
            disableRipple
            sx={{
              justifyContent: 'flex-start',
              px: 3,
            }}
          >
            Login
          </Button>
        </NavLink>

        <Divider />

        <NavLink className="nav-container__link" to="/*">
          <Button
            className={`nav-container__button ${isCurrentPage('/*')}`}
            startIcon={<XCircleIcon />}
            disableRipple
            sx={{
              justifyContent: 'flex-start',
              px: 3,
            }}
          >
            Error
          </Button>
        </NavLink>
        <Divider />
      </Paper>
    </nav>
  );
};

export default NavBar;
