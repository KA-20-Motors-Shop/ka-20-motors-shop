import AdRegister from "../adRegister";
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
          <AdRegister type="update" />
        </div>
      ) : type === "updateAddress" ? (
        <div>
          {/* <div> */}
          {/* <h3>Editar endereço</h3> */}
          {/* adicionar icon */}
          {/* <button>x</button> */}
          {/* </div> */}
          <form action="">
            <span>Informações de endereço</span>
            <Input
              type="text"
              label="CEP"
              name="zipcode"
              placeholder="Digitar CEP"
            />
            <Input
              type="text"
              label="Estado"
              name="state"
              placeholder="Digitar estado"
            />
            <Input
              type="text"
              label="Cidade"
              name="city"
              placeholder="Digitar cidade"
            />
            <Input
              type="text"
              label="Rua"
              name="street"
              placeholder="Digitar rua"
            />
            <Input
              type="number"
              label="Número"
              name="number"
              placeholder="Digitar número"
            />
            <Input
              type="text"
              label="Complemento"
              name="complement"
              placeholder="Digitar complement"
            />
            <Button children="Cancelar" />
            <Button children="Salvar alterações " />
          </form>
        </div>
      ) : type === "updateProfile" ? (
        <div>
          {/* <div> */}
          {/* <h3>Editar perfil</h3> */}
          {/* adicionar icon */}
          {/* <button>x</button> */}
          {/* </div> */}
          <form action="">
            <span>Informações pessoais</span>
            <Input
              type="text"
              label="Nome"
              name="name"
              placeholder="Digitar nome"
            />
            <Input
              type="text"
              label="Email"
              name="email"
              placeholder="Digitar email"
            />
            <Input
              type="text"
              label="CPF"
              name="cpf"
              placeholder="Digitar cpf"
            />
            <Input
              type="date"
              label="Data de nascimento"
              name="birthDate"
              placeholder="Digitar data de nascimento"
            />
            <TextArea
              label="Descrição"
              name="description"
              placeholder="Digitar descrição"
            />
            <Button children="Cancelar" />
            <Button children="Salvar alterações " />
          </form>
        </div>
      ) : type === "updatePost" ? (
        <div>
          {/* <div> */}
          {/* <h3>Editar anúncio</h3> */}
          {/* adicionar icon */}
          {/* <button>x</button> */}
          {/* </div> */}
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
            <span>Publicado</span>
            <Button children="Sim" />
            <Button children="Não" />
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
            <Input
              label="2º imagem da galeria"
              type="image"
              placeholder="Inserir URL da imagem"
              name="image"
            />
            <Button children="Adicionar campo para imagem da galeria" />
            <Button children="Excluir anúncio" />
            <Button children="Salvar alterações " />
          </form>
        </div>
      ) : (
        type === "deletePost" && (
          <div>
            {/* <div> */}
            {/* <h3>Excluir anúncio</h3> */}
            {/* adicionar icone no botao */}
            {/* <button>x</button>  */}
            {/* </div> */}
            <span>
              <strong>Tem certeza que deseja remover este anúncio?</strong>
            </span>
            <p>
              Essa ação não pode ser desfeita. Isso excluirá permanentemente sua
              conta e removerá seus dados de nossos servidores.
            </p>
            <Button children="Cancelar" />
            <Button children="Sim, excluir anúncio" />
          </div>
        )
      )}
    </>
  );
};

export default Modal;
