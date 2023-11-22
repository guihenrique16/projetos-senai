import React from "react";
import "./TableTpEvent.css";
import editPen from "../../../assets/images/edit-pen.svg";
import trashDelete from "../../../assets/images/trash-delete.svg";

const TableTpEvent = ({ dados, fnUpdate, fnDelete }) => {
  return (
    <table className="table-data">
      <thead className="table-data__head">
        <tr className="table-data__head-row">
          <th className="table-data__head-title table-data__head-title--big">
            Título
          </th>
          <th className="table-data__head-title table-data__head-title--big">
            Descricao
          </th>
          <th className="table-data__head-title table-data__head-title--big">
            Tipo evento
          </th>
          <th className="table-data__head-title table-data__head-title--big">
            Data
          </th>
          <th className="table-data__head-title table-data__head-title--little">
            Editar
          </th>
          <th className="table-data__head-title table-data__head-title--little">
            Deletar
          </th>
        </tr>
      </thead>

      <tbody>
        {dados.map((tp) => {
          return (
            <tr className="table-data__head-row">
              <td className="table-data__data table-data__data--big">
                {tp.nomeEvento}
              </td>
              <td className="table-data__data table-data__data--big">
                {tp.descricao}
              </td>
              <td className="table-data__data table-data__data--big">
                {tp.tiposEvento.titulo}
              </td>
              <td className="table-data__data table-data__data--big">
                {tp.dataEvento}
              </td>

              <td className="table-data__data table-data__data--little">
                <img
                  className="table-data__icon"
                  src={editPen}
                  alt=""
                  onClick={() => {
                    fnUpdate(tp.idEvento);
                  }}
                />
              </td>

              <td className="table-data__data table-data__data--little">
                <img
                  className="table-data__icon"
                  src={trashDelete}
                  alt=""
                  onClick={() => {
                    fnDelete(tp.idEvento);
                  }}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableTpEvent;
