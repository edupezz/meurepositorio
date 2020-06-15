import React, { useState } from 'react';
import { AiFillGithub } from "react-icons/ai";

import { 
    FormButtonContainer,
    HeaderContainer,
    ExpandInput 
}
from './styles';

import { 
    Nav,
    NavItem,
    NavLink, 
    Button,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    DropdownToggle 
} 
from 'reactstrap';

export function Header (props){


    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(!dropdownOpen);

    return(

        <HeaderContainer>
            <Nav style={{maxWidth: '53vw'}}>
                <AiFillGithub size="5.29vh"
                    style={ {color: '#fff', marginLeft: '3.5vw' }} />
                 <Dropdown nav isOpen={dropdownOpen} toggle={toggle}
                 style={{ marginLeft: '0.9vw'}}>
                    <DropdownToggle style={{
                        textDecoration: 'none',
                        color: 'white'
                    }} nav caret>
                        Why GitHub?
                    </DropdownToggle>
                    <DropdownMenu
                    style={{minWidth: '24vw'}}>
                        <DropdownItem>&nbsp;</DropdownItem>
                        <DropdownItem><b>Features</b></DropdownItem>
                        <DropdownItem>Code review</DropdownItem>
                        <DropdownItem>Project Management</DropdownItem>
                        <DropdownItem>Integrations</DropdownItem>
                        <DropdownItem>Actions</DropdownItem>
                        <DropdownItem>Packages</DropdownItem>
                        <DropdownItem>Security</DropdownItem>
                        <DropdownItem>Team Management</DropdownItem>
                        <DropdownItem>Hosting</DropdownItem>
                        <hr style={{maxWidth: '21vw'}}/>
                        <DropdownItem><b>Customer stories</b></DropdownItem>
                        <DropdownItem><b>Security</b></DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <NavItem
                    style={{
                        display: 'flex',
                        marginRight: '0.7vw',
                        }}>
                    <NavLink href="#"
                        style={{color:'white'}}>Team</NavLink>
                    <NavLink href="#"
                        style={{color:'white'}}>Enterprise</NavLink>
                    <NavLink href="#"
                        style={{color:'white'}}>Explore</NavLink>
                    <NavLink href="#"
                        style={{color:'white'}}>Marketplace</NavLink>
                    <NavLink href="#"
                        style={{color:'white'}}>Pricing</NavLink>
                </NavItem>
            </Nav>
            <FormButtonContainer>
                <ExpandInput type="search" placeholder="&nbsp;Search GitHub" />
                <Button size='md' color="link" 
                    style={{color: 'white'}}>Sign In</Button>
                <Button outline color="secondary" size='md'
                    style={{color: 'white'}}>Sign Up</Button>
            </FormButtonContainer>
        </HeaderContainer>
    );
}

export default Header;