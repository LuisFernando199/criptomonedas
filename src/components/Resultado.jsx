import styled from "@emotion/styled";

const Contenedor = styled.div`
  color: #fff;
  font-family: "Lato", sans-serif;

  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
`;
const Texto = styled.p`
  color: yellow;
  font-weight: 700;
`;
const Precio = styled.p`
  font-size: 28px;
  span {
    font-weight: 700;
    color: #01ff01;
  }
`;
const Imagen = styled.img`
  display: block;
  width: 120px;
`;

function Resultado({ resultado }) {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;
  return (
    <Contenedor>
      <Imagen
        src={`https://cryptocompare.com/${IMAGEURL}`}
        alt="imagen criptomoneda"
      />
      <div>
        <Precio>
          El Precio es de: <span>{PRICE}</span>
        </Precio>
        <Texto>
          Precio más alto del día: <span>{HIGHDAY}</span>
        </Texto>
        <Texto>
          Precio más bajo del día: <span>{LOWDAY}</span>
        </Texto>
        <Texto>
          Varacion últimas 24 horas: <span>{CHANGEPCT24HOUR}</span>
        </Texto>
        <Texto>
          Última actualización: <span>{LASTUPDATE}</span>
        </Texto>
      </div>
    </Contenedor>
  );
}

export default Resultado;
