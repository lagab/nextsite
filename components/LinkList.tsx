import Link from 'next/link'
import React from 'react'

export type link = {
    title:string,
    name:string,
    href: string,
}
export type linkListProps = {
 links: link[],
 className: string,
}
export const LinkList = ({links, className}: linkListProps) => {
  return (
    <ul className={className}>
        { links.map((link,index) => (
            <li key={index} className="mb-4"><Link title={link.title} href={link.href} >{link.name}</Link></li>
        ))}
    </ul>
  )
}
