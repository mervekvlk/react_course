import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from 'reactstrap';

import './App.css';

function Navi({ seciliUrunler, toplamFiyat, sepetBosalt }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" className='ps-5 pe-5'>
        <NavbarBrand href="/" className="mr-auto">Marka İsmi</NavbarBrand>
        <NavbarToggler onClick={toggle} className="ml-auto" />
        <Collapse isOpen={isOpen} navbar className='justify-content-end'>
          <Nav className="ml-auto " navbar>
            <NavItem>
              <NavLink href="#">Kategoriler</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Ürünler</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">İletişim</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar className='ml-auto'>
              <DropdownToggle nav caret>
                Sepet
              </DropdownToggle>
              <DropdownMenu end className="text-right">
                {seciliUrunler.map((item, id) =>
                  <DropdownItem key={id}>{item.ad} - {item.fiyat} TL</DropdownItem>
                )}


                <DropdownItem divider />
                <DropdownItem>Toplam Fiyat: {toplamFiyat} TL</DropdownItem>
                <div>
                  <Button
                    onClick={()=>{sepetBosalt()}}
                    color="warning"
                  >
                    Sepeti Sil
                  </Button>
                </div>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navi;