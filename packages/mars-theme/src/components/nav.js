import { connect, styled } from "frontity";
import Link from "./link";

/**
 * Navigation Component
 *
 * It renders the navigation links
 */

 const Menu = ({options, currentPageLink, submenu}) => (
  <StyledMenu submenu={submenu}>
    {options.map(({name, href, submenu}) => {
      // Check if the link matched the current page url
      const isCurrentPage = currentPageLink === href;
      return (
        <MenuItem key={name}>
          {/* If link url is the current page, add `aria-current` for a11y */}
          <MenuLink
            link={href}
            aria-current={isCurrentPage ? "page" : undefined}
          >
            {name}
          </MenuLink>
          { submenu && <Menu options={submenu} currentPageLink={currentPageLink} submenu/> }
        </MenuItem>
      );
    })}
  </StyledMenu>
)

/**
 * Navigation Component
 *
 * It renders the navigation links
 */

 const Navigation = ({ state }) => (
  <NavWrapper>
    <MenuNav>
      <Menu options={state.theme.menu} currentPageLink={state.router.link} />
    </MenuNav>
  </NavWrapper>
);

export default connect(Navigation);

const NavWrapper = styled.div`
  align-items: center;
  display: flex;
`;

const MenuNav = styled.nav`
  display: none;
  @media (min-width: 1000px) {
    display: block;
    width: 100%;
  }
`;

const MenuItem = styled.li`
  font-size: inherit;
  line-height: 1.25;
  position: relative;
  font-size: 16px;
`;

const MenuLink = styled(Link)`
  color: white !important;
  display: block;
  line-height: 1.2;
  text-decoration: none;
  text-decoration: unset;
  width: 100%;
  padding: 15px 20px;
  display: block;
  &:hover,
  &[aria-current="page"] {
    color: #2ed573 !important;
  }
`;

const StyledMenu = styled.ul`
  display: flex;
  flex-direction: ${({submenu}) => submenu && 'column'};
  visibility: ${({submenu}) => submenu && 'hidden'};
  position: ${({submenu}) => submenu && 'absolute'};
  top: ${({submenu}) => submenu && '30px'};
  left: ${({submenu}) => submenu && '0px'};
  z-index: ${({submenu}) => submenu && '9'};
  padding: 0px;
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: -0.0277em;
  flex-wrap: wrap;
  justify-content: flex-start;
  list-style: none;
  margin: ${({submenu}) => submenu ? '10px' : 0};
  width: ${({submenu}) => submenu && '320px'};
  background: ${({submenu}) => submenu && '#2f3542'};
  ${MenuItem}:hover & {
    visibility: ${({submenu}) => submenu && 'visible'};
  }
  @media (min-width: 1220px) {
    margin-top: ${({submenu}) => submenu ? '10px' : 0};
    margin-right: 0px;
    margin-bottom: 0px;
  }
`;