import React from "react";
import styled from "styled-components";

const Modal = styled.div`
    display: block;
    position: fixed;
    z-index: 1;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
    background-color: white;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    max-width: 500px;
    border-radius: 8px;
    overflow-y: auto;
    max-height: 80vh;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

const ModalDescription = styled.p`
    white-space: normal;
    word-wrap: break-word;
    overflow-wrap: break-word;
`;

const CloseButton = styled.span`
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
`;



class Post extends React.Component {
    state = {
        post: [],
        titulo: "",
        descricao: "",
        imagem: "",
        isModalOpen: false, 
        modal: [],
    }

    onClickPostar = () => {
        let titulo = this.state.titulo;
        let descricao = this.state.descricao;

        if (titulo.length > 50) {
            alert("Seu título tem mais que 50 caracteres");
            return; 
        } else if (titulo === "") {
            alert("Seu título não foi preenchido");
            return;
        } else if (descricao === "") {
            alert("Sua descrição não foi preenchida");
            return;
        }

        let imagem = this.state.imagem;
        let id = Math.random();

        let post = [
            ...this.state.post,
            { titulo: titulo, descricao: descricao, imagem: imagem, id: id }
        ];
   
        this.setState({
            post: post,
            descricao: "",
            titulo: "",
            imagem: "",
        });
    }

    deletarPost = (idPost) => {
        const postsCopia = [...this.state.post];
        const postsFiltrados = postsCopia.filter((postDel) => {
            return idPost !== postDel.id;
        });
        this.setState({ post: postsFiltrados });
    }

    onChangeTitulo = (event) => {
        this.setState({
            titulo: event.target.value
        });
    }

    onChangeDescricao = (event) => {
        this.setState({
            descricao: event.target.value
        });
    }

    onChangeImagem = (event) => {
        this.setState({
            imagem: event.target.value
        });
    }

    onClickLerMais = (titulo, descricao, imagem) => {
        let modal = [
            { titulo: titulo, descricao: descricao, imagem: imagem }
        ];
        this.setState({ 
            isModalOpen: true,
            modal: modal
         });
    }

    fecharModal = () => {
        this.setState({ 
            isModalOpen: false, 
            modal: [] 
        });
    }

    render() {
        let postagens = this.state.post.map((posts) => {
            let imagemPost;
            if (posts.imagem === "") {
                imagemPost = <img src="https://picsum.photos/id/1/200/300" alt="" />;
            } else {
                imagemPost = <img src={posts.imagem} alt="" />;
            }

            let descricaoPost;
            if (posts.descricao.length > 100) {
                let LeiaMais = posts.descricao.slice(0, 100);
                descricaoPost = (
                    <div>
                        <p>{LeiaMais}...</p> 
                        <button onClick={() => this.onClickLerMais(posts.titulo, posts.descricao, imagemPost)}>Leia Mais</button>
                    </div>
                );
            } else {
                descricaoPost = <p>{posts.descricao}</p>
            }

            return ( 
                <div key={posts.id}>
                    <h2>{posts.titulo}</h2>
                    {descricaoPost}
                    {imagemPost}
                    <button onClick={() => {this.deletarPost(posts.id);}}>Deletar</button>
                </div>
            );
        });

        let modalExibido = this.state.modal.map((modal) => {
            return ( 
            <div>
                <h1>{modal.titulo}</h1>
                <ModalDescription>{modal.descricao}</ModalDescription>
                {modal.imagem}
            </div>
            );
        });

        return (
            <>
                <div>{postagens}</div>
                <input type='text' name="titulo" onChange={this.onChangeTitulo} value={this.state.titulo} placeholder='Digite seu título' />
                <input type='text' name="descricao" onChange={this.onChangeDescricao} value={this.state.descricao} placeholder='Digite sua descrição' />
                <input type='url' name="imagem" onChange={this.onChangeImagem} value={this.state.imagem} placeholder="Insira sua imagem"></input>
                <button onClick={this.onClickPostar}>Postar</button>

                {this.state.isModalOpen && (
                    <Modal>
                        <ModalContent>
                            <CloseButton onClick={this.fecharModal}>&times;</CloseButton>
                            {modalExibido}
                        </ModalContent>
                    </Modal>
                )}
            </>
        );
    }
}

export default Post;
