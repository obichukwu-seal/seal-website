import { Button, NavLink, Row } from "@/components/atom";
import { NAV_LINKS } from "@/constants";
import { SealLogo } from "@/public/index";
import React from "react";


type Props = {};

const NavBarRow = (props: Props) => {
  const navItems = NAV_LINKS.map((items, index) => {
    return (
      <li key={items.id}>
        <NavLink href={items.pathname}> {items.name}</NavLink>
      </li>
    );
  });
  return (
    <Row className="justify-between hidden lg:flex gap-[2.5rem] items-center">
      <SealLogo />
      <ul>
        <Row className="gap-[2.5rem]">{navItems}</Row>
      </ul>
      <Button href={"/bookings"} variant="primary">
      Book a free consultation
      </Button>
    </Row>
  );
};

export default NavBarRow;
