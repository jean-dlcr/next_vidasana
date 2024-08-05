"use client";
import React from 'react'
import Link from "next/link";
import { usePathname } from 'next/navigation'

const LinkComponent = ({
  href="",
  label="",
  addClassName=""
}) => {
 

  const currentPath = usePathname();
  const isActive = currentPath === href || (currentPath === '/' && href === '/');


  const className = `no-underline flex ${(isActive ? 'active' : 'inactive')} ${addClassName}`;

  return (
    <li>
        <Link href={href} className={className}>
        <label>{label}</label>
            
        </Link>
    </li>
  )
}

export default LinkComponent;