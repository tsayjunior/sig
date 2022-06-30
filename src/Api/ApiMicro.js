const API = "http://ec2-15-228-12-142.sa-east-1.compute.amazonaws.com/api/transporte";

export const getUsers = async () => { //trae todos los usuarios registrados
  const res = await fetch(API);
  return await res.json();
};

export const getUser = async (id) => { //trae un usuario, especificado segun su id
  const res = await fetch(`${API}/${id}`);
  return await res.json();
};

export const saveUsers = async (newUser) => { //guarda un usuario
  const res = await fetch(API, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(newUser)
  });
  return await res.json();
};

export const deleteUser = async (id) => { //borra un usuario segun el id dado
  // console.log(`${API}/${id}`)
  await fetch(`${API}/${id}`, { // a la ruta api, se le concatena / + el id
    method: "DELETE",

  })
}

export const updateUser = async (id, newUser) => { //actualiza un usuario dado segun el id, por el newUser
  const res = await fetch(`${API}/${id}`, { // a la ruta api, se le concatena / + el id
    method: "PUT",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(newUser)
  })
  return res;
}

