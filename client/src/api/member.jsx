import axios from "axios";

export const listMember = () => axios.get("http://localhost:5000/api/member");

export const removeMember = (token, id) => {
    return axios.delete("http://localhost:5000/api/member/" + id,{
    headers: {
        Authorization: `Bearer ${token}`,
    },
    });
};
export const updateMember = (token, id,form) => {
    return axios.patch("http://localhost:5000/api/member/" + id,form,{
    headers: {
        Authorization: `Bearer ${token}`,
    },
    });
};


export const removeMap = (id) => {
    return axios.delete("http://localhost:5000/api/landmark/" + id

)};