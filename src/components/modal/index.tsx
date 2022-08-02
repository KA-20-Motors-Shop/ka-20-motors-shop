import Button from "../button";
import Input from "../Input";
import TextArea from "../TextArea";

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
        <div>
          <form action="">
            <span>Tipo de anúncio</span>
            <Button children="Venda" />
            <Button children="Leilão" />
            <span>Informações do veículo</span>
            <Input
              type="text"
              label="Título"
              name="title"
              placeholder="Digitar título"
            />
            <Input
              type="number"
              label="Ano"
              name="year"
              placeholder="Digitar ano"
            />
            <Input
              type="number"
              label="Quilometragem"
              name="kilometers"
              placeholder="Digitar ano"
            />
            <Input
              type="number"
              label="Preço"
              name="price"
              placeholder="Digitar preço"
            />
            <TextArea
              label="Descrição"
              name="description"
              placeholder="Digitar descrição"
            />
            <span>Tipo de veículo</span>
            <Button children="Carro" />
            <Button children="Moto" />
            <Input
              label="Imagem de capa"
              type="image"
              placeholder="Inserir URL da imagem"
              name="bannerImage"
            />
            <Input
              label="1º imagem da galeria"
              type="image"
              placeholder="Inserir URL da imagem"
              name="image"
            />
            <Button children="Adicionar campo para imagem da galeria" />
            <Button children="Cancelar" />
            <Button children="Criar Anúncio" />
          </form>
        </div>
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
