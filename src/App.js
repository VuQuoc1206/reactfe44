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

function App() {
  return (
    <div>
      {/* <BaiTapLayout/> */}
      {/* <RenderWithMap/> */}
      {/* <EXRenderMap/> */}
      {/* <DemoProps/> */}
      <BT2ProductList/>
    </div>
  );
}

export default App;
