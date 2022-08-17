import Button from "../button";
import Input from "../Input";
import TextArea from "../TextArea";
import AdRegisterForm from "./style";

interface IAdRegister {
  type: string;
}

const AdRegister = ({ type }: IAdRegister) => {
  return (
    <AdRegisterForm>
      <h3>Criar Anúncio</h3>
      <form>
        <span>Tipo de anúncio</span>
        <div className="choiceButtons">
          <Button children="Venda" />
          <Button children="Leilão" />
        </div>

        <span>Informações do veículo</span>
        <Input
          type="text"
          label="Título"
          name="title"
          placeholder="Digitar título"
        />
        <div className="anoKmPreco">
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
        </div>
        <TextArea
          label="Descrição"
          name="description"
          placeholder="Digitar descrição"
        />
        <span>Tipo de veículo</span>
        <div className="choiceButtons">
          <Button children="Carro" />
          <Button children="Moto" />
        </div>

        {type === "update" ? (
          <>
            <span>Publicado</span>
            <div className="choiceButtons">
              <Button children="Sim" />
              <Button children="Não" />
            </div>
          </>
        ) : (
          <></>
        )}

        <Input
          label="Imagem de capa"
          type="text"
          placeholder="Inserir URL da imagem"
          name="bannerImage"
        />
        <Input
          label="1º imagem da galeria"
          type="text"
          placeholder="Inserir URL da imagem"
          name="image"
        />
        <div className="addFieldButton">
          <Button children="Adicionar campo para imagem da galeria" />
        </div>
      </form>
      {type === "update" ? (
        <div className="cancelCreateButtons">
          <div className="choiceButtons">
            <Button children="Excluir anúncio" />
            <Button children="Salvar alterações" />
          </div>
        </div>
      ) : (
        <div className="cancelCreateButtons">
          <div className="cancel">
            <Button children="Cancelar" />
          </div>
          <div className="create">
            <Button children="Criar Anúncio" />
          </div>
        </div>
      )}
    </AdRegisterForm>
  );
};
export default AdRegister;
