import styled from "styled-components"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectToken, selectUser } from "../store/user/selectors"
import { logOut } from "../store/user/slice"
import { Link } from "react-router-dom"
import { FaPaw, FaShoppingCart } from "react-icons/fa";
<style>
@import url('https://fonts.googleapis.com/css2?family=Bitter:wght@100&display=swap');
</style>

export const Navigation = () => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const token = useSelector(selectToken)
  const user = useSelector(selectUser)
  return (
    <Nav>
      <Logo href="/">
        Cuddly Critters Adoption Center<span>  < FaPaw /> </span>
      </Logo>
      <Hamburger onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu open={open}>
        {!!token && user && user.isAdmin && <MenuLink to="/admin/applications">Manage Applications</MenuLink>}
        <MenuLink to="/contact">Contact Us</MenuLink>
        <MenuLink to= "/products"> Shop! </MenuLink>
        <MenuLink to= "/cart"> <FaShoppingCart/> </MenuLink>
        {token
          ? <button onClick={() => dispatch(logOut())}>Logout</button>
          : <MenuLink to="/login">Login</MenuLink>}
      </Menu>
    </Nav>
  )
}

const MenuLink = styled(Link)`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #ECECEC;
  transition: all 0.3s ease-in;
  font-size: 1.2rem;

  &:hover {
    color: #fff;
  }
`

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #79A48C;
  /* position: absolute; */
  top: 0;
  left: 0;
  right: 0;
`

const Logo = styled.a`
  padding: 1rem 0;
  color: #ECECEC;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
  font-family: 'Bitter', serif;
  transition: all 0.3s ease-in;

  span {
    font-weight: 300;
    font-size: 1.3rem;
  }

  &:hover {
    color: #fff;
  }
`

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background-color: #DE6E4B;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 780px) {
    display: flex;
  }
`

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 780px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ open }) => open ? "300px" : "0"};
    transition: max-height 0.3s ease-in;
  }
`
