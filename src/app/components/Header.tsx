import styles from "@/app/styles/navbar.module.css"
import Image from "next/image"
import Link from "next/link"
import Nav from "./Nav"

export default function Header() {
  return (
    <header className={styles.main_header}>
        <div className={styles.navbar_brand}>
            <Link href="/">
                <Image src="/logo.png" alt="logo img" width={200} height={70} />
            </Link>
        </div>
        <Nav />
    </header>
  )
}
