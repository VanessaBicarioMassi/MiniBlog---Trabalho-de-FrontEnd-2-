import styled from "styled-components";

export const StyledInput = styled.input`
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 2px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    box-sizing: border-box;
    transition: border-color 0.3s ease;
`;

export const StyledButton = styled.button`
    width: 100%;
    background-color: green;
    color: white;
    padding: 10px;
    margin: 10px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
`;

export const Modal = styled.div`
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

export const ModalConteudo = styled.div`
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

export const ModalDescricao = styled.p`
    white-space: normal;
    word-wrap: break-word;
    overflow-wrap: break-word;
`;

export const FecharModalButton = styled.span`
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
`;

export const PostContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid rgb(204, 204, 204);
    border-radius: 8px;
    height: auto;
    background-color: white;
    word-wrap: break-word;
    overflow-wrap: break-word;
`;

export const PostImagem = styled.img`
    width: 40%;
    height: auto;
    object-fit: cover;
    margin-right: 20px;
    border-radius: 8px;
`;

export const PostConteudo = styled.div`
    align-items: top;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const PostTitulo = styled.h2`
    margin: 0;
    font-size: 18px;
    font-weight: bold;
`;

export const PostDescricao = styled.p`
    margin: 10px 0;
    font-size: 14px;
`;

export const LeiaMaisbutton = styled.button`
    background-color: green;
    color: white;
    border: none;
    padding: 5px 10px;
    font-size: 20px;
    cursor: pointer;
    border-radius: 4px;
    margin: 5px 0;
    align-self: flex-start;
`;

export const DeletarButton = styled.button`
    background-color: red;
    color: white;
    border: none;
    padding: 5px 10px;
    font-size: 20px;
    cursor: pointer;
    border-radius: 4px;
    align-self: flex-start;
`;
