import React from 'react';
import { NavLink, generatePath } from 'react-router-dom';
import styled from 'styled-components';

import * as Routes from 'routes';

import {
  ExploreIcon,
  NotificationIcon,
  HomeIcon,
  PeopleIcon,
  EnvelopeIcon,
  ProfissionalIcon,
  NoticiasIcon,
  SaudeIcon,
  JuridicoIcon, 
  FilmesIcon, 
  AppsIcon, 
  ComecarIcon
} from 'components/icons';

const Link = styled(NavLink)`
  text-decoration: none;
  transition: color 0.1s;
  color: ${p => p.theme.colors.text.primary};
  display: block;
  padding-left: ${p => p.theme.spacing.xs};

  &:hover,
  &.selected {
    color: ${p => p.theme.colors.primary.main};
    background-color: ${p => p.theme.colors.grey[100]};

    svg path {
      fill: ${p => p.theme.colors.primary.main};
    }

    @media (min-width: ${p => p.theme.screen.md}) {
      background-color: ${p => p.theme.colors.white};
    }
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  line-height: 40px;
  font-size: ${p => p.theme.font.size.xs};
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Name = styled.div`
  margin-left: ${p => p.theme.spacing.sm};
`;


const Navigation = () => {
  return (
    <List>
      <Link exact activeClassName="selected" to={Routes.HOME}>
        <ListItem>
          <HomeIcon />
          <Name>Home</Name>
        </ListItem>
      </Link>

      <Link exact activeClassName="selected" to={Routes.EXPLORE}>
        <ListItem>
          <ExploreIcon width={20} />
          <Name>Explorar</Name>
        </ListItem>
      </Link>

      <Link exact activeClassName="selected" to={Routes.PEOPLE}>
        <ListItem>
          <PeopleIcon />
          <Name>Pessoas</Name>
        </ListItem>
      </Link>

      <Link exact activeClassName="selected" to={Routes.NOTIFICATIONS}>
        <ListItem>
          <NotificationIcon width={18} />
          <Name>Notificações</Name>
        </ListItem>
      </Link>


      <Link
        exact
        activeClassName="selected"
        to={generatePath(Routes.MESSAGES, { userId: Routes.NEW_ID_VALUE })}
      >
        <ListItem>
          <EnvelopeIcon width={18} />
          <Name>Mensagens</Name>
        </ListItem>
        </Link>
   

      <h2>Indicações</h2>

      <Link
        exact
        activeClassName="selected"
        to={generatePath(Routes.USER_PROFILE, {
          username: "profissionais",
        })}
      >
      <ListItem>
        <ProfissionalIcon width={18} />
        <Name>Profissionais</Name>
      </ListItem>
      </Link>

      <Link
        exact
        activeClassName="selected"
        to={generatePath(Routes.USER_PROFILE, {
          username: "saude",
        })}
      >
      <ListItem>
        <SaudeIcon width={18} />
        <Name>Saúde</Name>
      </ListItem>
      </Link>
     
     
      <Link
        exact
        activeClassName="selected"
        to={generatePath(Routes.USER_PROFILE, {
          username: "juridico",
        })}
      >
      <ListItem>
        <JuridicoIcon width={18} />
        <Name>Jurídico</Name>
      </ListItem>
      </Link>


 <Link
        exact
        activeClassName="selected"
        to={generatePath(Routes.USER_PROFILE, {
          username: "filmes",
        })}
      >
      <ListItem>
        <FilmesIcon width={18} />
        <Name>Filmes</Name>
      </ListItem>
      </Link>


      <Link
        exact
        activeClassName="selected"
        to={generatePath(Routes.USER_PROFILE, {
          username: "apps",
        })}
      >

      <ListItem>
        <AppsIcon width={18} />
        <Name>Apps</Name>
      </ListItem>
</Link>

<Link
        exact
        activeClassName="selected"
        to={generatePath(Routes.USER_PROFILE, {
          username: "noticias",
        })}
      >
<ListItem>
  <NoticiasIcon width={18} />
  <Name>Notícias</Name>
</ListItem>
</Link>



      <h2>Assuntos</h2>

      

<Link
        exact
        activeClassName="selected"
        to={generatePath(Routes.USER_PROFILE, {
          username: "comecando",
        })}
      >
<ListItem>
  <ComecarIcon width={18} />
  <Name>Por onde começar?</Name>
</ListItem>
</Link>

<Link
        exact
        activeClassName="selected"
        to={generatePath(Routes.USER_PROFILE, {
          username: "comecando",
        })}
      >
<ListItem>
  <ComecarIcon width={18} />
  <Name>Relação familiar</Name>
</ListItem>
</Link>

<Link
        exact
        activeClassName="selected"
        to={generatePath(Routes.USER_PROFILE, {
          username: "comecando",
        })}
      >
<ListItem>
  <ComecarIcon width={18} />
  <Name>Educação</Name>
</ListItem>
</Link>


     
    

    </List >
  );
};

export default Navigation;
