const stateDefault = {
  banChon: "TAI",
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
  { ma: 4, hinhAnh: "./img/3.png", soDiem: 4 },
  { ma: 5, hinhAnh: "./img/3.png", soDiem: 5 },
  { ma: 6, hinhAnh: "./img/3.png", soDiem: 6 },
];

const BaiTapXucXacReducer = (state = stateDefault, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default BaiTapXucXacReducer;
