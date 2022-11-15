import Link from "next/link"
import navStyles from "../styles/Nav.module.css"

const navLinks = ["about"]

const Navigator = () => {
  return (
    <nav className={navStyles.navigator}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        {navLinks.map((link, idx) => {
          return (
            <li key={idx}>
              <Link href={`/${link}`}>{link}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navigator
