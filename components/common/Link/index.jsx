"use client";
import React from 'react'
import Link from "next/link";
import {useRouter} from 'next/navigation';

const LinkComponent = ({
  href="",
  label="",
  addClassName=""
}) => {
  const router =  useRouter();

  const currentPath = router?.pathname || '/';
  const isActive = currentPath === href || (currentPath === '/' && href === '/');

  console.log(router);
  console.log(href);
  console.log(isActive);

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