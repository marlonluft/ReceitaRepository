/* React */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

/* Actions */
import { handleListarReceitas } from "../Actions/ReceitaAction";

/* Layout */
import { Row, Col, Table, Button } from "reactstrap";

const ListagemReceitaView = () => {
  const history = useHistory();
  const receitas = useSelector((state) => state.receitas);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleListarReceitas());
  }, [dispatch]);

  const verReceita = (receitaParam) => {
    history.push({
      pathname: "/visualizar/" + receitaParam.id,
      state: { receita: receitaParam },
    });
  };

  return (
    <Col sm={{ size: 12 }}>
      <Row>
        <Col sm={{ size: 6, offset: 3 }}>
          <Link to={"/cadastrar"}>Cadastrar</Link>
        </Col>
      </Row>
      <Row>
        <Col sm={{ size: 10, offset: 1 }}>
          <Table>
            <thead>
              <tr>
                <th>Titulo</th>
                <th>#</th>
              </tr>
            </thead>
            <tbody>
              {receitas && receitas.length > 0 ? (
                receitas.map((receita, key) => {
                  return (
                    <tr key={key}>
                      <td>{receita.titulo}</td>
                      <td>
                        <Button
                          outline
                          color="primary"
                          size="sm"
                          onClick={() => verReceita(receita)}
                        >
                          Ver
                        </Button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={2}>Nenhuma receita cadastrada</td>
                </tr>
              )}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Col>
  );
};

export default ListagemReceitaView;
