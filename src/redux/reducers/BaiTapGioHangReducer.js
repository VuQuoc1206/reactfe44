import BaiTapGioHangRedux from "../../ReduxDemo/BaiTapGioHangRedux/BaiTapGioHangRedux";

const stateDefault = {
  stateGioHang: [
    {
      maSP: 1,
      tenSP: "Iphone X",
      hinhAnh: "./img/vsphone.jpg",
      giaBan: 1000,
      soLuong: 1,
    },
  ],
};

const BaiTapGioHangReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "Them_Gio_Hang": {
      let gioHangCapNhat = [...state.stateGioHang];

      let index = gioHangCapNhat.findIndex(
        (spGH) => spGH.maSP === action.spGH.maSP
      );
      if (index !== -1) {
        gioHangCapNhat[index].soLuong += 1;
      } else {
        gioHangCapNhat.push(action.spGH);
      }
      return { ...state, stateGioHang: gioHangCapNhat };
    }
    default:
      return { ...state };
  }
};

export default BaiTapGioHangReducer;
