import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Layout.module.css"

export default function Home() {
  return (
    <div>
    <Head>
      <title>NextJS Practice</title>
      <meta name="keywords" content="web development, programming" />
      <meta name="description" content="This is a practice website built with NextJS"/>
    </Head>
      <h1>Welcome to NextJS</h1>
    </div>
  )
}
