import React from 'react';
import './HomePage.css';
import VisionSection from '../../Components/VisionSection/VisionSection';
import MainContent from '../../Components/MainContent/MainContent';
import Banner from '../../Components/Banner/Banner';
import ContactSection from '../../Components/ContactSection/ContactSection';
import NextEvent from '../../Components/NextEvent/NextEvent';
import Container from '../../Components/Container/Container'
import Title from '../../Components/Title/Title';

const HomePage = () => {
    return (
        <MainContent>
            <Banner/>

            <section className='proximos-eventos'>
                <Container>
                    <Title titleText={"Proximos eventos"}/>
                    <div className='events-box'>
                        <NextEvent
                            title={"Evento X"}
                            description={"Evento legal :)"}
                            eventDate={"14/11/2023"}
                            idEvento={"jswjfjhjsyeui"}
                        />
                        <NextEvent
                            title={"Evento X"}
                            description={"Evento legal :)"}
                            eventDate={"14/11/2023"}
                            idEvento={"jswjfjhjsyeui"}
                        />
                        <NextEvent
                            title={"Evento X"}
                            description={"Evento legal :)"}
                            eventDate={"14/11/2023"}
                            idEvento={"jswjfjhjsyeui"}
                        />
                    </div>
                </Container>
            </section>

            <VisionSection/>
            <ContactSection/>
        </MainContent>
    );
};

export default HomePage;