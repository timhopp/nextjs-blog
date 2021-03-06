import { Navbar, Nav, Container } from "react-bootstrap";
import React, { Component } from "react";
import Link from "next/link";

class Footer extends React.Component {
  render() {
    return (
      <div className="bg-dark p-2">
        <div className="text-center">
          <Link href="https://github.com/timhopp">
            <p className="text-white">Made By Tim Hopp</p>
          </Link>
        </div>
      </div>
    );
  }
}
export default Footer;
