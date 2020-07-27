import React from 'react';
import Demo from './Components/Demo';
import DemoClass from './Components/DemoClass';
import BaiTapLayout from './Components/BaiTapLayout/BaiTapLayout';
import DataBinding from './DataBinding/DataBinding';
import EventBinding from './EventBinding/EventBinding';
import HandleState from './HandleState/HandleState';
import BaiTapChonXe from './HandleState/BaiTapChonXe';
import RenderWithMap from './RenderWithMap/RenderWithMap';
import EXRenderMap from './RenderWithMap/EXRenderMap';
import DemoProps from './DemoProps/DemoProps';
import BT2ProductList from './DemoProps/BT2ProductList/BT2ProductList';
import DemoPropsFunction from './DemoProps/DemoPropsFunction/DemoPropsFunction';
import BTGioHangProps from './BTGioHangProps/BTGioHangProps';
import BaiTapGioHangRedux from './ReduxDemo/BaiTapGioHangRedux/BaiTapGioHangRedux';

function App() {
  return (
    <div>
      {/* <BaiTapLayout/> */}
      {/* <RenderWithMap/> */}
      {/* <EXRenderMap/> */}
      {/* <DemoProps/> */}
      {/* <BT2ProductList/> */}
      {/* <DemoPropsFunction/> */}
      {/* <BTGioHangProps/> */}
      <BaiTapGioHangRedux/>
    </div>
  );
}

export default App;
