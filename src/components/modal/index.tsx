import Button from "../button";

interface IModal {
  type: string;
}

const Modal = ({ type }: IModal) => {
  return (
    <>
      {type === "navModal" ? (
        <div>
          <nav>
            <div className="leftDivNav">
              <Button children="Carros" />
              <Button children="Motos" />
              <Button children="Leilão" />
            </div>
            <div>
              <Button children="Fazer Login" />
              <Button children="Cadastrar" />
            </div>
          </nav>
        </div>
      ) : type === "productImg" ? (
        <div>
          <h3>Imagem de Veículo</h3>
          <img src="" alt="" />
        </div>
      ) : type === "createPost" ? (
        <div></div>
      ) : type === "updateAddress" ? (
        <div></div>
      ) : type === "updateProfile" ? (
        <div></div>
      ) : type === "updatePost" ? (
        <div></div>
      ) : (
        type === "deletePost" && <div></div>
      )}
    </>
  );
};

export default Modal;
