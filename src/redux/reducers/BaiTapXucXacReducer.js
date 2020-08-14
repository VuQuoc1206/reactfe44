const stateDefault = {
  banChon: "TÀI",
  soBanThang: 0,
  soBanChoi: 0,
  mangXucXac: [
    { ma: 1, hinhAnh: "./img/1.png", soDiem: 1 },
    { ma: 1, hinhAnh: "./img/1.png", soDiem: 1 },
    { ma: 1, hinhAnh: "./img/1.png", soDiem: 1 },
  ],
};

const dsXucXac = [
  { ma: 1, hinhAnh: "./img/1.png", soDiem: 1 },
  { ma: 2, hinhAnh: "./img/2.png", soDiem: 2 },
  { ma: 3, hinhAnh: "./img/3.png", soDiem: 3 },
  { ma: 4, hinhAnh: "./img/4.png", soDiem: 4 },
  { ma: 5, hinhAnh: "./img/5.png", soDiem: 5 },
  { ma: 6, hinhAnh: "./img/6.png", soDiem: 6 },
];

const BaiTapXucXacReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_CUOC_XUC_XAC": {
      state.banChon = action.banChon;
      return { ...state };
    }
    case "RANDOM_XUC_XAC": {
      let mangXiNgau = [];
      for (let i = 0; i < 3; i++) {
        let soNgauNhien = Math.floor(Math.random() * 6);
        mangXiNgau.push(dsXucXac[soNgauNhien]);
      }
      state.mangXucXac = mangXiNgau;
      return { ...state };
    }
    case "TINH_DIEM": {
      let tongDiem = state.mangXucXac.reduce((tongDiem_XiNgau, xiNgau, index) => {
        return (tongDiem_XiNgau += xiNgau.soDiem);
      }, 0);
      if (
        (tongDiem >= 10 && state.banChon === "TÀI") ||
        (tongDiem <= 10 && state.banChon === "XỈU")
      ) {
        state.soBanThang += 1;
      }
      state.soBanChoi += 1;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default BaiTapXucXacReducer;
