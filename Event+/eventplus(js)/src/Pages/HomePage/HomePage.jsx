import React, { useState } from "react";
import "./HomePage.css";
import VisionSection from "../../Components/VisionSection/VisionSection";
import MainContent from "../../Components/MainContent/MainContent";
import Banner from "../../Components/Banner/Banner";
import ContactSection from "../../Components/ContactSection/ContactSection";
import NextEvent from "../../Components/NextEvent/NextEvent";
import Container from "../../Components/Container/Container";
import Title from "../../Components/Title/Title";

const HomePage = () => {
  // fake mock = api mocada
  const [nextEvents, setNext] = useState([  
    {
      id: 1,
      title: "Evento X",
      descricao: "Evento de SQL Server",
      date: "10/11/2023",
    },
    { 
        id: 2, 
        title: "Evento Y", 
        descricao: "Evento de js", 
        date: "11/11/2023" },
    { 
        id: 3, 
        title: "Evento Z", 
        descricao: "Evento de API", 
        date: "12/11/2023" },
    { 
        id: 4, 
        title: "Evento A", 
        descricao: "Evento de CSS", 
        date: "13/11/2023" },
  ]);
  return (
    <MainContent>
      <Banner />

      <section className="proximos-eventos">
        <Container>
          <Title titleText={"Proximos eventos"} />
          <div className="events-box">

            {
                nextEvents.map((e) => {
                    return(
                        <NextEvent
                            title={e.title}
                            description={e.descricao}
                            eventDate={e.date}
                            idEvento={e.id}
                        />
                    );
                })
            }

          </div>
        </Container>
      </section>

      <VisionSection />
      <ContactSection />
    </MainContent>
  );
};

export default HomePage;
