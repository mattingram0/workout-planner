'use client';
import "../../styles/globals.css";
import {Navbar} from "flowbite-react";
import Image from 'next/image'

export default function Page() {
  return (
      <div>
          <Navbar fluid={true} rounded={true}>
              <Navbar.Brand href="https://flowbite.com/">
                  <div className="h-16 w-16 relative">
                      <Image
                          src="/logo.jpeg"
                          className="mr-3 h-6 sm:h-9"
                          alt="GymPass Logo"
                          layout="fill" // required
                      />
                  </div>
                  <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">GymPlanner</span>
              </Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse>
                  <Navbar.Link href="/navbars" active={true}>Home</Navbar.Link>
                  <Navbar.Link href="/navbars">About</Navbar.Link>
                  <Navbar.Link href="/navbars">Contact</Navbar.Link>
              </Navbar.Collapse>
          </Navbar>
          <div className="h-screen flex items-center justify-center">
              <div className="">
                  <h1>
                      Welcome to GymPlanner
                  </h1>
              </div>
          </div>
      </div>
  )
}