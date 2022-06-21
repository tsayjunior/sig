import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { getUsers } from "../Api/ConsultasApi";
import TaskUser from '../components/UserList'
import Layout from '../components/Layout'

const UserLista = () => {
  const [users, setUsers] = useState([]); //defino un estado llamado users, y una funcion usersState que lo actualiza, y un arreglo en blanco que nos permitira empezar siempre con el arreglo en blanco

  const loadTasks = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  useEffect(() => {
    // console.log("usuarios");
    loadTasks();
  }, []);

  return (
    <Layout>
        <TaskUser users={users} />
    </Layout>
  );
};

export default UserLista;