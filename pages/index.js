import styles from '../styles/Home.module.css'
import Hero from '../components/hero'
import Section2 from '../components/section2'
import Section3 from '../components/section3'
import Section4 from '../components/section4'
import Section5 from '../components/section5'
import Section6 from '../components/section6'
import Section7 from '../components/section7'
import Quote from '../components/quote'
import Footer from '../components/footer'
export default function Home() {
  return (
    <div className={styles.container}>
      <Hero></Hero>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
      <Section5></Section5>
      <Section6></Section6>
      <Section7></Section7>
      <Quote></Quote>
      <Footer></Footer>
    </div>
  )
}
