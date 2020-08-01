import { combineReducers } from "redux";
import BaiTapGioHangReducer from "./BaiTapGioHangReducer";
import BaiTapGameBauCuaReducer from "./BaiTapGameBauCuaReducer";
import BaiTapXucXacReducer from "./BaiTapXucXacReducer";
// rootReducer quản lý state của toàn ứng dụng
const rootReducer = combineReducers({
  // nơi khai báo các state (reducer) theo từng nghiệp vụ

  GioHangReducer: BaiTapGioHangReducer,
  BaiTapGameBauCuaReducer,
  BaiTapXucXacReducer,
});

export default rootReducer;
