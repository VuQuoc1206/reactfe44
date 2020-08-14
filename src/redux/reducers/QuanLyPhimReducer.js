import { layDanhSachPhim } from "../actions/types/QuanLyType";

const movieState = {
  danhSachPhim: [],
};

export default (state = movieState, action) => {
  switch (action.type) {
    case layDanhSachPhim: {
      state.danhSachPhim = action.danhSachPhim;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
