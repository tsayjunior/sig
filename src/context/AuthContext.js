// import { View, Text } from 'react-native'
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { createContext, useState } from "react";
import { BASE_URL } from "../Config";
import { isEmpty } from "lodash";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [Micros, setMicross] = useState({});

  const register = (
    ci,
    name,
    lastname,
    sex,
    fecha_nac,
    email,
    category_licencia_id,
    password,
    password_confirmation,
    phone
  ) => {
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/register`, {
        ci,
        name,
        lastname,
        sex,
        fecha_nac,
        email,
        category_licencia_id,
        password,
        password_confirmation,
        phone,
      })
      .then((res) => {
        let userInfo = res.data;
        alert(res);
        setUserInfo(userInfo);
        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
        setIsLoading(false);
        console.log(userInfo);
      })
      .catch((e) => {
        console.log(`register error ${e}`);
        setIsLoading(false);
      });
  };

  const login = (ci, password) => {
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/login`, {
        ci,
        password,
      })
      .then((res) => {
        let userInfo = res.data;
       
          setUserInfo(userInfo);
          AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
          setIsLoading(false);
        
      })
      .catch((e) => {
        console.log(`login error ${e}`);
      /*  if (isEmpty(e)) {
        alert("todos los campos son requeridos");
      } else {
        alert(`login error ${e}`);
        setIsLoading(false);
      }*/
      }); 
  };

  const logout = () => {
    setIsLoading(true);

    axios
      .get(
        `${BASE_URL}/logout`,
        // {},
        {
          headers: { Authorization: `Bearer ${userInfo.access_token}` },
        }
      )
      .then((res) => {
        console.log("-*-*-*-**-*-*");

        console.log(res.data);
        AsyncStorage.removeItem("userInfo");
        setUserInfo({});
        setIsLoading(false);
      })
      .catch((e) => {
        // console.log("-*-*-*-**-*-*");
        // console.log(`logout error ${e}`);
        setIsLoading(false);
      });
  };

  const setMicros = () => {
    //muestra todos los micros registrados de un chofer (usuario)
    setIsLoading(true);

    axios
      .get(
        `${BASE_URL}/transporte`,
        // {},
        {
          headers: { Authorization: `Bearer ${userInfo.access_token}` },
        }
      )
      .then((res) => {
        // console.log("-*-*-*-**-*-*");
        setIsLoading(false);
        setMicross(res.data);
      })
      .catch((e) => {
        // console.log("-*-*-*-**-*-*");
        console.log(`logout error ${e}`);
        setIsLoading(false);
      });
  };

 

  const saveMicro = (
    placa,
    modelo,
    linea,
    cantidad_asiento,
    numero_interno,
    fecha_asignacion,
    fecha_baja
  ) => {
    setIsLoading(true);

    axios
      .post(
        `${BASE_URL}/transporte`,
        {
          placa,
          modelo,
          linea,
          cantidad_asiento,
          numero_interno,
          fecha_asignacion,
          fecha_baja,
        },
        {
          headers: { Authorization: `Bearer ${userInfo.access_token}` },
        }
      )
      .then((res) => {
        console.log("-*-*-*-**-*-*");
        console.log(res);
        setIsLoading(false);
        // setMicross(res.data);
      })
      .catch((e) => {
        // console.log("-*-*-*-**-*-*");
        console.log(`logout error ${e}`);
        setIsLoading(false);
      });
  };

  const eliminarMicro = (id) => {
    //muestra todos los micros registrados de un chofer (usuario)
    setIsLoading(true);

    axios
      .delete(
        `${BASE_URL}/transporte/${id}`,
        // {},
        {
          headers: { Authorization: `Bearer ${userInfo.access_token}` },
        }
      )
      .then((res) => {
        // console.log("-*-*-*-**-*-*");
        setIsLoading(false);
        // setMicross(res.data);
      })
      .catch((e) => {
        // console.log("-*-*-*-**-*-*");
        console.log(`logout error ${e}`);
        setIsLoading(false);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        Micros,
        register,
        login,
        logout,
        setMicros,
        saveMicro,
        eliminarMicro
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
