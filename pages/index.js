import styles from '../styles/Home.module.css'
import Hero from '../src/components/Hero'
import Industries from '../src/components/Industries'
import Process from '../src/components/Process'
import Client from '../src/components/Client'
import Services from '../src/components/Services'
import Team from '../src/components/Team'
import Blog from '../src/components/Blog'
import Quote from '../src/components/Quote'
import Footer from '../src/components/Footer'
import {useEffect, useRef, useState} from "react";
import Nav from "../src/components/Nav";
import Indicator from "../src/components/layout/Indicator";

export default function Home() {
    const [activeSection, setActiveSection] = useState('home');
    const industriesRef = useRef();
    const processRef = useRef();
    const clientRef = useRef();
    const tangoRef = useRef();
    const heroRef = useRef();

    const activateSection = (section) => {
        setActiveSection(section);

    }

    const scrollToSection=(section)=>{
        switch (section) {
            case 'industries':
                industriesRef.current.scrollIntoView(true);
                break;
            case 'our_process':
                processRef.current.scrollIntoView(true);
                break;
            case 'case_studies':
                clientRef.current.scrollIntoView(true);
                break;
            case 'tango':
                tangoRef.current.scrollIntoView(true);
                break;
                }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return window.removeEventListener('scroll', () => {
        })
    }, [activeSection])


    const handleScroll = (e) => {
        const heroSection = [heroRef.current.offsetTop, heroRef.current.clientHeight + heroRef.current.offsetTop]
        const industriesSection = [industriesRef.current.offsetTop, industriesRef.current.clientHeight + industriesRef.current.offsetTop]
        const processSection = [processRef.current.offsetTop, processRef.current.clientHeight + processRef.current.offsetTop]
        const clientSection = [clientRef.current.offsetTop, clientRef.current.clientHeight + clientRef.current.offsetTop]
        const tangoSection = [tangoRef.current.offsetTop, tangoRef.current.clientHeight + tangoRef.current.offsetTop]


        const scrollPosition = window.scrollY;
        switch (true) {
            case (scrollPosition >= heroSection[0] && scrollPosition <= heroSection[1]):
                activateSection('hero')
                break;
            case (scrollPosition >= industriesSection[0] && scrollPosition <= industriesSection[1]):
                activateSection('industries')
                break;
            case (scrollPosition >= processSection[0] && scrollPosition <= processSection[1]):
                activateSection('our_process')
                break;
            case (scrollPosition >= clientSection[0] && scrollPosition <= clientSection[1]):
                activateSection('case_studies')
                break;
            case (scrollPosition >= tangoSection[0] && scrollPosition <= tangoSection[1]):
                activateSection('tango')
                break;
        }
    }

    return (
        <div className={styles.container}>
            <Nav scrollToSection={scrollToSection}/>
            <Indicator activeSection={activeSection}/>
            <Hero heroRef={heroRef}/>
            <Industries industriesRef={industriesRef}/>
            <Process processRef={processRef}/>
            <Client clientRef={clientRef}/>
            <Services/>
            <Team tangoRef={tangoRef}/>
            <Blog/>
            <Quote/>
            <Footer/>
        </div>
    )
}
