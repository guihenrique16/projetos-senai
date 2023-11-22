import React, { useState, useEffect } from "react";
import Container from "../../Components/Container/Container";
import MainContent from "../../Components/MainContent/MainContent";
import Title from "../../Components/Title/Title";
import ImageIllustrator from "../../Components/ImageIllustrator/ImageIllustrator";
import eventImage from "../../assets/images/evento.svg";
import { Button, Input } from "../../Components/FormComponents/FormComponents";
import TableTpEvent from "./TableTpEvent/TableTpEvent";
import api from '../../Services/Service'

const EventosPage = () => {
  const [frmEdit, setFrmEdit] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    async function getEventos() {
      try {
        const promise = await api.get("/Evento");
        setEventos(promise.data);
      } catch (error) {
        console.log("Deu ruim na api");
        console.log(error);
      }
    }
    getEventos();
  }, [eventos]);

  async function signUpEvent(e) {
    e.preventDefault();
  }
  async function handleEdit(e) {
    e.preventDefault();
  }
  async function deleteEvent() {
    
  }
  return (
    <MainContent>
      <section className="cadastro-evento-section">
        <Container>
          <div className="cadastro-evento__box ">
            <Title titleText={"Página de Eventos"} />

            <ImageIllustrator alterText={""} imageRender={eventImage} />

            <form
              className="ftipo-evento"
              onSubmit={frmEdit ? handleEdit : signUpEvent}
            >
              {!frmEdit ? (
                <>
                  <Input
                    type={"text"}
                    id={"titulo"}
                    name={"titulo"}
                    placeholder={"titulo"}
                    required={"required"}
                    value={titulo}
                    manipulationFunction={(e) => {
                      setTitulo(e.target.value);
                    }}
                  />
                  {titulo}

                  <Input
                    type={"text"}
                    id={"descricao"}
                    name={"descricao"}
                    placeholder={"descricao"}
                    required={"required"}
                    value={descricao}
                    manipulationFunction={(e) => {
                      setDescricao(e.target.value);
                    }}
                  />
                  
                  <Button
                    type={"submite"}
                    id={"cadastrar"}
                    name={"cadastrar"}
                    textButton={"cadastrar"}
                  />
                </>
              ) : (
                <>
                  {/* EDITAR */}
                  <Input
                    id="titulo"
                    placeholder="Titulo"
                    name="titulo"
                    type="text"
                    required="required"
                    value={titulo}
                    manipulationFunction={(e) => {
                      setTitulo(e.target.value);
                    }}
                  />

                  <div className="buttons-editbox">
                    <Button
                      textButton="atualizar"
                      id="atualizar"
                      name="atualizar"
                      type="submit"
                      additionalClass="button-component--middle"
                    />
                    <Button
                      textButton="Cancelar"
                      id="cancelar"
                      name="cancelar"
                      type="button"
                      manipulationFunction={editActionAbort}
                      additionalClass="button-component--middle"
                    />
                  </div>
                </>
              )}
            </form>
          </div>
        </Container>
      </section>
      <section className="lista-eventos-section">
        <Container>
          <Title titleText={"Lista de eventos"} color="white" />

          <TableTpEvent
            dados={eventos}
            fnUpdate={(idElemento) => showUpdateForm(idElemento)}
            fnDelete={deleteEvent}
          />
        </Container>
      </section>
    </MainContent>
  );
};

export default EventosPage;
