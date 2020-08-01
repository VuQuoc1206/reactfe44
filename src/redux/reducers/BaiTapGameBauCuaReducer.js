const stateDefault = {
  danhSachCuoc: [
    { ma: "cua", hinhAnh: "./img/cua.png", diemCuoc: 0 },
    { ma: "nai", hinhAnh: "./img/nai.png", diemCuoc: 0 },
    { ma: "ga", hinhAnh: "./img/ga.png", diemCuoc: 0 },
    { ma: "tom", hinhAnh: "./img/tom.png", diemCuoc: 0 },
    { ma: "ca", hinhAnh: "./img/ca.png", diemCuoc: 0 },
    { ma: "bau", hinhAnh: "./img/bau.png", diemCuoc: 0 },
  ],

  diemThuong: 500,
  xucXac: [
    {
      ma: "cua",
      hinhAnh: "./img/cua.png",
    },
    {
      ma: "cua",
      hinhAnh: "./img/ga.png",
    },
    {
      ma: "cua",
      hinhAnh: "./img/tom.png",
    },
  ],
};

const BaiTapGameBauCuaReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_CUOC":
      let mangCuocUpdate = [...state.danhSachCuoc];
      let index = mangCuocUpdate.findIndex((qc) => qc.ma === action.ma);
      // Xem coi người dùng bấm tăng hay giảm

      if (index !== -1) {
        if (action.tangGiam) {
          if (state.diemThuong > 0) {
            // nếu điểm thưởng > 0 cho phép đặt cược
            mangCuocUpdate[index].diemCuoc += 100;
            state.diemThuong -= 100;
          }
        } else {
          if (mangCuocUpdate[index].diemCuoc > 0) {
            // nếu điểm đặt cược lớn hơn 0 thì mới cho giảm

            mangCuocUpdate[index].diemCuoc -= 100;
            state.diemThuong += 100;
          }
        }
      }
      return { ...state, danhSachCuoc: mangCuocUpdate };

    case "PLAY_GAME": {
      // xử lý random mảng xúc xắc
      let mangXucXacNgauNhien = [];

      // Chạy vòng lặp 3 lần tạo ra 3 con xúc xắc đưa vào mảng

      for (let i = 0; i < 3; i++) {
        // Random ra 1 số ngẫu nhiên từ 0 -> 5
        let soNgauNhien = Math.floor(Math.random() * 6);

        // tạo ra 1 viên xúc xắc từ số ngẫu nhiên

        let xucXacNgauNhien = {
          ma: state.danhSachCuoc[soNgauNhien].ma,
          hinhAnh: state.danhSachCuoc[soNgauNhien].hinhAnh,
        };

        // bỏ xúc xắc ngẫu nhiên từ mảng
        mangXucXacNgauNhien.push(xucXacNgauNhien);
      }
      // Cập nhật mảng các con xúc xắc = mảng xúc xắc ngẫu nhiên
      state.xucXac = mangXucXacNgauNhien;

      // xử lý trúng thưởng

      for (var xucXacNN of mangXucXacNgauNhien) {
        let indexMangCuoc = state.danhSachCuoc.findIndex(
          (qc) => qc.ma === xucXacNN.ma
        );
        if (indexMangCuoc !== -1) {
          state.diemThuong += state.danhSachCuoc[indexMangCuoc].diemCuoc;
        }
      }

      // Xử lý hoàn tiền

      for (var quanCuoc of state.danhSachCuoc) {
        // kiểm tra quân cược tồn tại trong mảng xúc xắc không nếu tồn tại + tiền

        let indeXucXac = mangXucXacNgauNhien.findIndex(
          (xx) => xx.ma === quanCuoc.ma
        );

        if (indeXucXac !== -1) {
          state.diemThuong += quanCuoc.diemCuoc;
        }
      }
      
      // xử lý reset mảng danhSachCuoc
      state.danhSachCuoc = state.danhSachCuoc.map((quanCuoc, index) => {
        return  {...quanCuoc, diemCuoc: 0 };
      });
      
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default BaiTapGameBauCuaReducer;
