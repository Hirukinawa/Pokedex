/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { postUser, getUsers, updateUser } from "../../service/Axios";
import { ApiList, ApiUser } from "../../App";

export default function Users() {
  interface Formulario {
    name: string;
    city: string;
  }

  const [form, setForm] = useState<Formulario>({ name: "", city: "" });
  const [formPost, setFormPost] = useState<Formulario>({ name: "", city: "" });
  const [apiUsers, setApiUsers] = useState<ApiList>();

  useEffect(() => {
    getUsersApi();
  }, []);

  const getUsersApi = async () => {
    try {
      const users = await getUsers();
      setApiUsers(users);
    } catch (error) {
      console.log(error);
    }
  };

  const onHandleSubmit = async () => {
    await postUser(form.name, "http://lorempixel.com.br/100/100", form.city);

    setForm({ name: "", city: "" });
  };

  const onHandleUpdate = async () => {
    await updateUser(
      2,
      form.name,
      "http://lorempixel.com.br/100/100",
      form.city
    );

    setFormPost({ name: "", city: "" });
  };

  const takeUsers = apiUsers?.users.map((user: ApiUser) => {
    return (
      <div className="user">
        <img src={user.avatar} width="100px" height="100px"></img>
        <div className="column">
          <h2>
            {user.id} - {user.name}
          </h2>
          <p>{user.city}</p>
        </div>
      </div>
    );
  });

  const trocaName = (event: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, name: event.target.value });
  const trocaCity = (event: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, city: event.target.value });
  const trocaNamePost = (event: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, name: event.target.value });
  const trocaCityPost = (event: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, city: event.target.value });

  return (
    <div className="bgWhite">
      <div className="row">
        <div className="column">
          <h1>Cadastrar</h1>
          <form className="column">
            <label>
              Nome:
              <input
                type="text"
                value={form.name}
                onChange={trocaName}
                required
              />
            </label>
            <label>
              Cidade:
              <input
                type="text"
                value={form.city}
                onChange={trocaCity}
                required
              />
            </label>
            <button type="submit" onClick={onHandleSubmit}>
              Enviar
            </button>
          </form>
        </div>
        <div className="column">
          <h1>Atualizar</h1>
          <form className="column">
            <label>
              Nome:
              <input
                type="text"
                value={formPost.name}
                onChange={trocaNamePost}
                required
              />
            </label>
            <label>
              Cidade:
              <input
                type="text"
                value={formPost.city}
                onChange={trocaCityPost}
                required
              />
            </label>
            <button type="submit" onClick={onHandleUpdate}>
              Atualizar
            </button>
          </form>
        </div>
        <div className="column">
          <h1>Deletar</h1>
          <label>
            Número de usuário:
            <input type="number" name="" id="" />
          </label>
          <button type="submit" onClick={onHandleUpdate}>
            Deletar
          </button>
        </div>
      </div>
      <h1>Usuários cadastrados</h1>
      {takeUsers}
    </div>
  );
}
