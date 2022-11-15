import styles from "../styles/Layout.module.css"
import Navigator from "./Navigator"
import Header from "./Header"
const Layout = ({ children }) => {
  return (
    <>
      <Navigator />

      <div className={styles.container}>
        <Header />
        <main className={styles.main}>{children}</main>
      </div>
    </>
  )
}

export default Layout
