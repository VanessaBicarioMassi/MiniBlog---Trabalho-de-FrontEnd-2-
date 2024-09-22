import React from "react";
import {
    StyledInput,
    StyledButton,
    Modal,
    ModalConteudo,
    ModalDescricao,
    FecharModalButton,
    PostContainer,
    PostImagem,
    PostConteudo,
    PostTitulo,
    PostDescricao,
    LeiaMaisbutton,
    DeletarButton,
} from "./PostStyles";

class Post extends React.Component {
    state = {
        post: [],
        titulo: "",
        descricao: "",
        imagem: "",
        modalAberto: false,
        modal: [],
    };

    onKeyDownEnter = (event) => {
        if (event.key === "Enter") {
            this.onClickPostar();
        }
    };

    onClickPostar = () => {
        let titulo = this.state.titulo;
        let descricao = this.state.descricao;
        let imagem = this.state.imagem;

        const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

        if (titulo.length > 50) {
            alert("Seu título tem mais que 50 caracteres");
            return;
        } else if (titulo === "") {
            alert("Seu título não foi preenchido");
            return;
        } else if (descricao === "") {
            alert("Sua descrição não foi preenchida");
            return;
        } else if (imagem !== "" && !urlRegex.test(imagem)) {
            alert("A URL da imagem não é válida");
            return;
        }

        let id = Math.random();

        let post = [
            ...this.state.post,
            { titulo: titulo, descricao: descricao, imagem: imagem, id: id },
        ];

        this.setState({
            post: post,
            descricao: "",
            titulo: "",
            imagem: "",
        });
    };

    deletarPost = (idPost) => {
        const postsCopia = [...this.state.post];
        const postsFiltrados = postsCopia.filter((postDel) => {
            return idPost !== postDel.id;
        });
        this.setState({ post: postsFiltrados });
    };

    onChangeTitulo = (event) => {
        this.setState({
            titulo: event.target.value,
        });
    };

    onChangeDescricao = (event) => {
        this.setState({
            descricao: event.target.value,
        });
    };

    onChangeImagem = (event) => {
        this.setState({
            imagem: event.target.value,
        });
    };

    onClickLerMais = (titulo, descricao, imagem) => {
        let modal = [{ titulo: titulo, descricao: descricao, imagem: imagem }];
        this.setState({ modalAberto: true, modal: modal });
    };

    fecharModal = () => {
        this.setState({
            modalAberto: false,
            modal: [],
        });
    };
    

    render() {
        let postagens = this.state.post.map((posts) => {
            let imagemPost = posts.imagem ? (
                <PostImagem src={posts.imagem} alt="" />
            ) : (
                <PostImagem src="https://picsum.photos/id/1/200/300" alt="" />
            );

            let descricaoPost;
            if (posts.descricao.length > 500) {
                let LeiaMais = posts.descricao.slice(0, 500);
                descricaoPost = (
                    <div>
                        <PostDescricao>{LeiaMais}...</PostDescricao>
                        <LeiaMaisbutton
                            
                            onClick={() =>
                                this.onClickLerMais(
                                    posts.titulo,
                                    posts.descricao,
                                    imagemPost
                                )
                            }
                        >
                            Leia Mais
                        </LeiaMaisbutton>
                    </div>
                );
            } else {
                descricaoPost = <PostDescricao>{posts.descricao}</PostDescricao>;
            }

            return (
                <PostContainer key={posts.id}>
                    {imagemPost}
                    <PostConteudo>
                        <PostTitulo>{posts.titulo}</PostTitulo>
                        {descricaoPost}
                        <DeletarButton
                            onClick={() => {
                                this.deletarPost(posts.id);
                            }}
                        >
                            Deletar
                        </DeletarButton>
                    </PostConteudo>
                </PostContainer>
            );
        });

        let modalExibido = this.state.modal.map((modal) => {
            return (
                <div key={modal.titulo}>
                    <h1>{modal.titulo}</h1>
                    <ModalDescricao>{modal.descricao}</ModalDescricao>
                    {modal.imagem}
                </div>
            );
        });

        return (
            <>
                <div>{postagens}</div>
                <StyledInput
                    type="text"
                    name="titulo"
                    onChange={this.onChangeTitulo}
                    value={this.state.titulo}
                    placeholder="Digite seu título com no máximo 50 caracteres"
                    onKeyDown={this.onKeyDownEnter}
                />
                <StyledInput
                    type="text"
                    name="descricao"
                    onChange={this.onChangeDescricao}
                    value={this.state.descricao}
                    placeholder="Digite sua descrição"
                    onKeyDown={this.onKeyDownEnter}
                />
                <StyledInput
                    type="url"
                    name="imagem"
                    onChange={this.onChangeImagem}
                    value={this.state.imagem}
                    placeholder="Insira sua imagem por meio de uma URL válida"
                    onKeyDown={this.onKeyDownEnter}
                />
                <StyledButton onClick={this.onClickPostar}>Postar</StyledButton>

                {this.state.modalAberto && (
                    <Modal>
                        <ModalConteudo>
                            <FecharModalButton onClick={this.fecharModal}>
                                &times;
                            </FecharModalButton>
                            {modalExibido}
                        </ModalConteudo>
                    </Modal>
                )}
            </>
        );
    }
}

export default Post;
