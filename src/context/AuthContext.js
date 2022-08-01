// import { View, Text } from 'react-native'
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { createContext, useState } from "react";
import { BASE_URL } from "../Config";
import { isEmpty } from "lodash";
import { Alert } from "react-native";

export const AuthContext = createContext();

export const AuthProvider = ({ children,navigation }) => {
  
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [Micros, setMicross] = useState({});
  const [MicroLinea, setMicroLinea] = useState({});
  const [LineaUser, setLineaUser] = useState({});
  const [ida, setGIda] = useState(true);
  const [HoraLlegada, setHoraLlegada] = useState("");
  const [TarjetaRecorrido, setTarjetaRecorrido] = useState(true);
  const [ErrorReporte, setErrorReporte] = useState(false);
  const [horaFinalizada, setHoraFinalizada] = useState({});
  
  
  const [id, setId] = useState("");
  const [hora_finalizado, setHora_Finalizado] = useState("");
  const [recorrido_tarjeta_id, setRecorrido_tarjeta_id] = useState("");
  const [modalLogin, setModalLogin] = useState(false);
  
  
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
  const HoraFinalizada = (id, hora_finalizado, recorrido_tarjeta_id, gps) => {
    //muestra todos los micros registrados de un chofer (usuario)
    setIsLoading(true);
    axios
      .put(
        `${BASE_URL}/chofer-tarjeta-recorrido/${id}`,
        {
          hora_finalizado,
          recorrido_tarjeta_id,
          gps
        },
        {
          headers: { Authorization: `Bearer ${userInfo.access_token}` },
        }
      )
      .then((res) => {
        setIsLoading(false);
        console.log("se actualiza")
      })
      .catch((e) => {
        // console.log("-*-*-*-**-*-*");
        console.log(`error ${e}`);
        console.log("no se actualiza")
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
      //  console.log("---------------------------------")
      //   console.log(userInfo.access_token)
      //   console.log(userInfo)
          setUserInfo(userInfo);
          AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
          setIsLoading(false);
        
        
      })
      .catch((e) => {
        console.log(`login error ${e}`);
        setModalLogin(true)
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
        Alert(()=>{"Volver A LOGIN"+ navigation.navigate("Login");})
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
        `${BASE_URL}/chofer-micros`,
        // {},
        {
          headers: { Authorization: `Bearer ${userInfo.access_token}` },
        }
      )
      .then((res) => {
        // console.log("-*-*-*micros-**-*-*");
        setIsLoading(false);
        setMicross(res.data);
        // console.log(Micros)
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
        console.log(`No se guardo micro error ${e}`);
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

  const microLinea = (id) => {
    //muestra todos los micros registrados de un chofer (usuario)
    setIsLoading(true);

    axios
      .get(
        `${BASE_URL}/micro/${id}`,
        // {},
        {
          headers: { Authorization: `Bearer ${userInfo.access_token}` },
        }
      )
      .then((res) => {
        // console.log("-*-*-*micros-**-*-*");
        setIsLoading(false);
        setMicroLinea(res.data);
        // console.log(Micros)
      })
      .catch((e) => {
        // console.log("-*-*-*-**-*-*");
        console.log(`logout error ${e}`);
        setIsLoading(false);
      });
  };

  const lineaUser =() =>{
    setIsLoading(true);

    axios
      .get(
        `${BASE_URL}/linea-activa`,
        // {},
        {
          headers: { Authorization: `Bearer ${userInfo.access_token}` },
        }
      )
      .then((res) => {
        // console.log("-*-*-*micros-**-*-*");
       
        setLineaUser(res.data);
        //  console.log(JSON.stringify(res.data,null,4)+ "*/*/*/ desde auth");
         setIsLoading(false);
      })
      .catch((e) => {
        // console.log("-*-*-*-**-*-*");
        console.log(`logout error ${e}`);
        setIsLoading(false);
      });
  }

  const guardarProblema = (
    descripcion,
  ) => {
    setIsLoading(true);

    axios
      .post(
        `${BASE_URL}/problema`,
        {
          descripcion
        },
        {
          headers: { Authorization: `Bearer ${userInfo.access_token}` },
        }
      )
      .then((res) => {
        console.log("-*-*-*-**-*-*");
        console.log(res);
        setIsLoading(false);
        console.log('guardado');
        setErrorReporte(false)
        // setMicross(res.data);
      })
      .catch((e) => {
        // console.log("-*-*-*-**-*-*");
        console.log(`No se guardo problema error ${e}`);
        setErrorReporte(true)
        setIsLoading(false);
      });
  };
  const setTarjetaRec = () => {
    //muestra todos los micros registrados de un chofer (usuario)
    setIsLoading(true);

    axios
      .get(
        // `${BASE_URL}/recorridos-chofer-tarjeta-activo`,
        `${BASE_URL}/tiempo-recorridos-chofer-tarjeta-activo`,

        // {},
        {
          headers: { Authorization: `Bearer ${userInfo.access_token}` },
        }
      )
      .then((res) => {
        // console.log("-*-*-*micros-**-*-*");
        setIsLoading(false);
        setTarjetaRecorrido(res.data);
        // console.log("-*-*-*tarjeta recorrdio-**-*-*");
        // console.log(res)
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
        id,
        hora_finalizado,
        recorrido_tarjeta_id,
        isLoading,
        userInfo,
        Micros,
        LineaUser,
        ida,
        TarjetaRecorrido,
        HoraLlegada,
        ErrorReporte,
        horaFinalizada,
        modalLogin, 
        setId,
        setHora_Finalizado,
        setRecorrido_tarjeta_id,
        register,
        login,
        logout,
        setMicros,
        saveMicro,
        eliminarMicro,
        microLinea,
        lineaUser,
        guardarProblema,
        setGIda,
        setTarjetaRec,
        setHoraLlegada,
        HoraFinalizada,
        setModalLogin
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
