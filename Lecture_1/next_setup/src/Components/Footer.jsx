import React from 'react'
import Link from "next/link";

function Footer() {
  return (
    <footer>
        <p>-------------------------</p>
        <h3>JioCinema</h3>
        <ul className="flex flex-col">
            <Link href="/">For You</Link>
            <Link href="/">Sports</Link>
            <Link href="/">Movies</Link>
            <Link href="/">TV Shows</Link>
        </ul>
    </footer>
  )
}

export default Footer
