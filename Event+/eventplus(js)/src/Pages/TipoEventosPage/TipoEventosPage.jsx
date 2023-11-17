import React, { useEffect, useState } from "react";
import "./TipoEventosPage.css";
import Title from "../../Components/Title/Title";
import MainContent from "../../Components/MainContent/MainContent";
import ImageIllustrator from "../../Components/ImageIllustrator/ImageIllustrator";
import eventTypeImage from "../../assets/images/tipo-evento.svg";
import Container from "../../Components/Container/Container";
import { Button, Input } from "../../Components/FormComponents/FormComponents";
import api from "../../Services/Service";
import TableTp from "./TableTp/TableTp";
import Notification from "../../Components/Notification/Notification";

const TipoEventosPage = () => {
  const [notifyUser, setNotifyUser] = useState({});

  const [frmEdit, setFrmEdit] = useState(false);
  const [titulo,setTitulo] = useState("");
  const [TipoEventos, setTipoEventos] = useState([]);

  useEffect(()=> {
    async function getTipoEventos() {
      try {
        const promise = await api.get("/TiposEvento");
        setTipoEventos(promise.data);
      } catch (error) {
        console.log('Deu ruim na api');
        console.log(error);
      }
    }
     getTipoEventos();
  }, [TipoEventos]);

  async function handleSubmit(e) {
    e.preventDefault();

    //validar pelo menos 3 caracteres
    if (titulo.trim().length < 3) {
        alert('O titulo deve ter ao menos 3 caracteres')
        return;
    }
    //chamar api
    try {
        const retorno = await api.post("/TiposEvento", {titulo: titulo})
        console.log("Cadastrado com sucesso");
        setNotifyUser({
          titleNote: "Sucesso",
          textNote: `Cadastrado com sucesso!`,
          imgIcon: "success",
          imgAlt:
            "Imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação ok.",
          showMessage: true,
        }); 
        console.log(retorno.data);
        setTitulo("");//limpa a variavel
    } catch (error) {
        console.log("deu ruim na api");
        console.log(error);
    }
  }

  function handleUpdate(e) {
    console.log("bora atualizar");
  }

  function showUpdateForm() {
    alert('Mostrando a tela de update')
  }

  function editActionAbort() {
    
  }

  function showDeleteForm() {
    alert('bora la apagar na api')
  }

  async function handleDelete(id) {
    try {
      await api.delete(`/TiposEvento/${id}`)
      console.log("deletado com sucesso");

      const retornoGet = await api.get("/TiposEvento")
      setTipoEventos(retornoGet.data);

  } catch (error) {
      console.log("deu ruim na api");
      console.log(error);
  }
  }

  return (
    <MainContent>
      <Notification {...notifyUser} setNotifyUser={setNotifyUser}/>
      {/* CADASTRO DE TIPO DE EVENTOS */}
      <section className="cadastro-evento-section">

        <Container>
          <div className="cadastro-evento__box">
            <Title titleText={"Página Tipos de Eventos"} />

            <ImageIllustrator alterText={""} imageRender={eventTypeImage} />

            <form className="ftipo-evento"
            onSubmit={frmEdit ? handleUpdate : handleSubmit}>
              {!frmEdit ? 
                (<>
                    <Input 
                    type={"text"}
                    id={"titulo"}
                    name={"titulo"}
                    placeholder={"titulo"}
                    required={"required"}
                    value={titulo}
                    manipulationFunction={
                        (e) => {
                            setTitulo(e.target.value)
                        }
                    }
                    />

                    {titulo}

                    <Button
                    type={'submite'}
                    id={'cadastrar'}
                    name={'cadastrar'}
                    textButton={'cadastrar'}
                    />
                 </>
                ) 
                :(<>
                    <input 
                    type={'text'} 
                    />
                </>
                )}
            </form>
          </div>
        </Container>
      
      </section>
      
      {/* LISTAGEM DE TIPO DE EVENTOS */}
      <section className="lista-eventos-section">
        <Container>
          <Title titleText={"Lista de tipo de eventos"} color="white"/>

          <TableTp
            dados={TipoEventos}
            fnUpdate={showUpdateForm}
            fnDelete={handleDelete}
          />
        </Container>                  
      </section>
    </MainContent>
  );
};

export default TipoEventosPage;
