const API = "http://ec2-15-228-12-142.sa-east-1.compute.amazonaws.com/api/user";

export const getUsers = async () => {
  const res = await fetch(API);
  return await res.json();
};

export const saveUsers = async (newUser) => {
  const res = await fetch(API, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(newUser)
  });
  return await res.json();
};
