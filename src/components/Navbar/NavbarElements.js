import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
    background: #F2E9DC;
    position: fixed;
    top: 0px;
    left: 0px;
    height: 85px;
    width: 100%;
    justify-content: space-between;
    overflow: hidden;
    z-index: 12;
`;

export const NavLink = styled(Link)`
    color: #477890;
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 2rem 2rem;
    cursor: pointer;
    &.active {
        color: #0D1B2A;
        text-decoration: none;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #0D1B2A;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 25px;
        left: 10px;
        transform: translate(-100%, 75 %);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.nav`
    display: felx;
    align-items: center;
    margin-right: -24px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtn = styled.nav`
    display; flex;
    align-items: center;
    margin-right: 24px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #0D1B2A;
    padding: 10px 22px;
    color: #F2E9DC;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    test-decoration: none;
    margin-left: 24px;
    &.hover {
        transition: all 0.2s ease-in-out;
        background: #937A75;
        color: #F2E9DC;
    }
`;