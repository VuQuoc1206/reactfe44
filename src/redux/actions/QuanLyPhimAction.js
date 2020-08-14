import axios from "axios";
import { layDanhSachPhim } from "./types/QuanLyType";
import { result } from "lodash";

export const layDanhSachPhimAction = () => {
  return (dispatch) => {
    axios({
      method: "GET",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
    })
      .then((result) => {
        console.log(result.data);
        dispatch({
          type: layDanhSachPhim,
          danhSachPhim: result.data,
        });
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
};
