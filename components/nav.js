import { Navbar, Nav } from "react-bootstrap";
import React, { Component } from "react";
import Link from "next/link";

class NavBarComp extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">News-Fi</Navbar.Brand>
          <Nav className="">
            <div className="">
              <Link href="/">
                <a className="m-4">Home </a>
              </Link>
              <Link href="/Sections/trendingUS">
                <a className="m-4">US Trending News</a>
              </Link>
              <Link href="/Sections/trendingWorld">
                <a className="m-4">World Trending News</a>
              </Link>
              <Link href="/Sections/sports">
                <a className="m-4">Sports</a>
              </Link>
              <Link href="/Sections/tech">
                <a className="m-4">Tech</a>
              </Link>
            </div>
          </Nav>
        </Navbar>
      </>
    );
  }
}

export default NavBarComp;
