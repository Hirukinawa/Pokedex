/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import {
  postUser,
  getUsers,
  updateUser,
  deleteUser,
} from "../../service/Axios";
import { ApiList, ApiUser } from "../../App";

export default function Users() {
  interface Formulario {
    name: string;
    city: string;
  }

  const [form, setForm] = useState<Formulario>({ name: "", city: "" });

  const [formPut, setFormPut] = useState<Formulario>({ name: "", city: "" });

  const [apiUsers, setApiUsers] = useState<ApiList>();

  const [inpPut, setInpPut] = useState(0);

  const [inpDel, setInpDel] = useState(0);

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

  async function onHandleSubmit() {
    await postUser(form.name, "http://lorempixel.com.br/100/100", form.city);

    setForm({ name: "", city: "" });
  }

  async function onHandleUpdate(event: React.ChangeEvent<HTMLFormElement>) {
    let confirmaPut: number = 0;
    for (let i = 0; i < apiUsers!.users.length; i++) {
      if (inpPut === apiUsers?.users[i].id) {
        confirmaPut = 1;
        await updateUser(
          inpPut,
          formPut.name,
          "http://lorempixel.com.br/100/100",
          formPut.city
        );
      }
    }
    if (confirmaPut === 0) {
      event.preventDefault;
      alert("Usuário não encontrado");
    }
    setFormPut({ name: "", city: "" });
  }

  async function onHandleDelete(event: React.ChangeEvent<HTMLFormElement>) {
    let confirmaPut: number = 0;
    for (let i = 0; i < apiUsers!.users.length; i++) {
      if (inpDel === apiUsers?.users[i].id) {
        confirmaPut = 1;
        await deleteUser(inpDel);
      }
    }
    if (confirmaPut === 0) {
      event.preventDefault;
      alert("Usuário não encontrado");
    }
  }

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

  const trocaNamePut = (event: React.ChangeEvent<HTMLInputElement>) =>
    setFormPut({ ...formPut, name: event.target.value });

  const trocaCityPut = (event: React.ChangeEvent<HTMLInputElement>) =>
    setFormPut({ ...formPut, city: event.target.value });

  const trocaInputPut = (event: React.ChangeEvent<HTMLInputElement>) =>
    setInpPut(Number(event.target.value));

  const trocaInputDelete = (event: React.ChangeEvent<HTMLInputElement>) =>
    setInpDel(Number(event.target.value));

  return (
    <div className="bgWhite">
      <div className="row">
        <div className="column">
          <h1>Cadastrar</h1>
          <form onSubmit={onHandleSubmit} className="column">
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
            <button type="submit">Enviar</button>
          </form>
        </div>
        <div className="column">
          <h1>Atualizar</h1>
          <form onSubmit={onHandleUpdate} className="column">
            <label>
              Nome:
              <input
                type="text"
                value={formPut.name}
                onChange={trocaNamePut}
                required
              />
            </label>
            <label>
              Cidade:
              <input
                type="text"
                value={formPut.city}
                onChange={trocaCityPut}
                required
              />
            </label>
            <label>
              Número de usuário:
              <input
                type="number"
                value={inpPut}
                onChange={trocaInputPut}
                step={1}
                min={1}
              />
            </label>
            <button type="submit">Atualizar</button>
          </form>
        </div>
        <div className="column">
          <h1>Deletar</h1>
          <form onSubmit={onHandleDelete} className="column">
            <label>
              Número de usuário:
              <input
                type="number"
                value={inpDel}
                onChange={trocaInputDelete}
                step={1}
                min={1}
              />
            </label>
            <button type="submit">Deletar</button>
          </form>
        </div>
      </div>
      <h1>Usuários cadastrados</h1>
      {takeUsers}
    </div>
  );
}
