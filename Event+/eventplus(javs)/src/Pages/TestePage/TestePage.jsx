import React, { useState } from 'react';
import Input from '../../Components/Input/Input'
import Button from '../../Components/Button/Button';

const TestePage = () => {
    const [total, setTotal] = useState();
    const [n1, setN1] = useState();
    const [n2, setN2] = useState();

    function handleCalcular(e) {
        e.preventDefault();
        setTotal(parseFloat(n1) + parseFloat(n2));
    }

    return (
        <div>

            <h1>Calc Page</h1>

            <form onSubmit={handleCalcular}>
                <Input
                    tipo= "number"
                    id="number1"
                    nome="numero1"
                    placeholder="Primeiro numero"
                    valor = {n1}
                    fnAltera={setN1}
                />
                <Input
                    tipo= "number"
                    id="number2"
                    nome="numero2"
                    placeholder="Segundo numero"
                    valor={n2}
                    fnAltera={setN2}
                />

                <Button type="submit"
                    textoBotao ="Somar"
                    id="botaoSomar"
                />
                <p>Resultado: <strong>{total}</strong></p>

            </form>
        </div>
    );
};

export default TestePage;