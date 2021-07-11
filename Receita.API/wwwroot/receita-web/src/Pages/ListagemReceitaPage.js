/* React */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

/* Actions */
import { handleListarReceitas } from "../Actions/ReceitaAction";

/* Layout */
import { Row, Col, Table, Button, Container } from "reactstrap";

const ListagemReceitaPage = () => {
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
    <Container>
      <Col sm={{ size: 12 }}>

        <h1>Minhas Receitas</h1>

        <Row>
          <Col sm={{ size: 12 }}>
            <Link to={"/cadastrar"}>
              <Button color="primary">Cadastrar</Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col sm={{ size: 12 }}>

            <br />

            <Table size="sm">
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
    </Container>
  );
};

export default ListagemReceitaPage;
