import React, { useState } from "react";
import "./TipoEventosPage.css";
import Title from "../../Components/Title/Title";
import MainContent from "../../Components/MainContent/MainContent";
import ImageIllustrator from "../../Components/ImageIllustrator/ImageIllustrator";
import eventTypeImage from "../../assets/images/tipo-evento.svg";
import Container from "../../Components/Container/Container";
import { Button, Input } from "../../Components/FormComponents/FormComponents";
import api from "../../Services/Service";

const TipoEventosPage = () => {
  const [frmEdit, setFrmEdit] = useState(false);
  const [titulo,setTitulo] = useState("")

   async function handleSubmit(e) {
    e.preventDefault();
    if (titulo.trim().length < 3) {
        alert('O titulo deve ter ao menos 3 caracteres')
        return;
    }
    try {
        const retorno = await api.post("/TiposEvento", {titulo: titulo})
        console.log("Cadastrado com sucesso");
        console.log(retorno.data);
        setTitulo("");
    } catch (error) {
        console.log("deu ruim na api");
        console.log(error);
    }
  }
  function handleUpdate() {
    console.log("bora atualizar");
  }

  return (
    <MainContent>
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
    </MainContent>
  );
};

export default TipoEventosPage;
