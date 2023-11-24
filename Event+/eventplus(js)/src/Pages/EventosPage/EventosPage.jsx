import React, { useState, useEffect } from "react";
import Container from "../../Components/Container/Container";
import MainContent from "../../Components/MainContent/MainContent";
import Title from "../../Components/Title/Title";
import ImageIllustrator from "../../Components/ImageIllustrator/ImageIllustrator";
import eventImage from "../../assets/images/evento.svg";
import {
  Button,
  Input,
  Select,
} from "../../Components/FormComponents/FormComponents";
import TableTpEvent from "./TableTpEvent/TableTpEvent";
import api from "../../Services/Service";
import Notification from "../../Components/Notification/Notification";

const EventosPage = () => {
  const [notifyUser, setNotifyUser] = useState({});
  const [frmEdit, setFrmEdit] = useState(false);
  const [nomeEvento, setNomeEvento] = useState("");
  const [descricao, setDescricao] = useState("");
  const [data, setData] = useState();
  const [eventos, setEventos] = useState([]);
  const [tiposEvento, setTiposEvento] = useState([]);
  const [idTipoEvento, setIdTipoEvento] = useState("");
  const [idEvento, setIdEvento] = useState([]);
  const [instituicao, setInstituicao] = useState(
    "db4466a6-4ef2-4dc2-af3d-35da525224da"
  );

  useEffect(() => {
    async function getEventos() {
      try {
        const promise = await api.get("/Evento");
        setEventos(promise.data);

        const retorno = await api.get("/TiposEvento");
        setTiposEvento(retorno.data);
      } catch (error) {
        console.log("Deu ruim na api");
        console.log(error);
      }
    }
    getEventos();
  }, []);

  async function atualizaLista() {
    try {
      const promise = await api.get("/Evento");
      setEventos(promise.data);
    } catch (error) {
      console.log("erro na api");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (nomeEvento.trim().length < 3) {
      alert("O titulo deve ter ao menos 3 caracteres");
      return;
    }
    // if (eventos.dataEvento<DateTime.now) {
      
    // }
    try {
      const retorno = await api.post("/Evento", {
        nomeEvento: nomeEvento,
        descricao: descricao,
        dataEvento: data,
        idTipoEvento:  idTipoEvento,
        idInstituicao: instituicao
      });
      
      atualizaLista() 
      editAbort()

      setNotifyUser({
        titleNote: "Sucesso",
        textNote: `Evento cadastrado com sucesso!`,
        imgIcon: "success",
        imgAlt:
          "Imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação ok.",
        showMessage: true,
      });
      console.log(retorno.data);
  

    } catch (error) {
      setNotifyUser({
        titleNote: "Erro",
        textNote: `erro ao cadastrar`,
        imgIcon: "danger",
        imgAlt: "Imagem de ilustração de danger.",
        showMessage: true,
      });
      console.log(error);
    }
  }
  async function handleEdit(e) {
    e.preventDefault();
  }
  async function deleteEvent(id) {
    try {
      await api.delete(`/Evento/${id}`);
      console.log("deletado com sucesso");

      atualizaLista()

      setNotifyUser({
        titleNote: "Sucesso",
        textNote: `deletado com sucesso!`,
        imgIcon: "success",
        imgAlt:
          "Imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação ok.",
        showMessage: true,
      });
    } catch (error) {
      console.log("deu ruim na api");
      console.log(error);
    }
  }
  async function showUpdateForm(idElemento) {
    setFrmEdit(true);
    try {
      const retorno = await api.get("/Evento/" + idElemento);

      setTitulo(retorno.data.titulo);
      setIdEvento(retorno.data.idEvento);
    } catch (error) {}
  }
  function editAbort() {
    setFrmEdit(false);
    setNomeEvento("");
    setDescricao("");
    setData("");
    setIdTipoEvento('');
  }

  return (
    <MainContent>
      <Notification {...notifyUser} setNotifyUser={setNotifyUser} />
      <section className="cadastro-evento-section">
        <Container>
          <div className="cadastro-evento__box ">
            <Title titleText={"Página de Eventos"} />

            <ImageIllustrator alterText={""} imageRender={eventImage} />

            <form
              className="ftipo-evento"
              onSubmit={frmEdit ? handleEdit : handleSubmit}
            >
              {!frmEdit ? (
                <>
                  <Input
                    type={"text"}
                    id={"Nome"}
                    name={"titulo"}
                    placeholder={"titulo"}
                    required={"required"}
                    value={nomeEvento}
                    manipulationFunction={(e) => {
                      setNomeEvento(e.target.value);
                    }}
                  />

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

                  <Select
                    options={tiposEvento}
                    id={"select"}
                    name={"select"}
                    required={"required"}
                    defaultValue={idTipoEvento}
                    manipulationFunction={(e) => {
                      setIdTipoEvento(e.target.value);
                    }}
                  />

                  <Input
                    type={"date"}
                    id={"data"}
                    name={"data"}
                    required={"required"}
                    value={data}
                    manipulationFunction={(e) => {
                      setData(e.target.value);
                    }}
                  />

                  <Button
                    type={"submit"}
                    id={"cadastrar"}
                    name={"cadastrar"}
                    textButton={"cadastrar"}
                  />
                </>
              ) : (
                <>
                  <Input
                    id="titulo"
                    placeholder="Titulo"
                    name="titulo"
                    type="text"
                    required="required"
                    value={nomeEvento}
                    manipulationFunction={(e) => {
                      setNomeEvento(e.target.value);
                    }}
                  />

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

                  <Select
                    options={tiposEvento}
                    id={"select"}
                    name={"select"}
                    required={"required"}
                    defaultValue={idTipoEvento}
                    manipulationFunction={(e) => {
                      setIdTipoEvento(e.target.value);
                    }}
                    additionalClass=""
                  />

                  <Input
                    type={"date"}
                    id={"data"}
                    name={"data"}
                    placeholder={"AA/MM/AAAA"}
                    required={"required"}
                    value={data}
                    manipulationFunction={(e) => {
                      setData(e.target.value);
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
                      manipulationFunction={editAbort}
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
