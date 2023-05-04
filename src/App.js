import { NextUIProvider } from '@nextui-org/react';
import AppBar from './components/Header'
import Banner from './components/Banner'
import Advantage from './components/Advantage'
import Product from './components/Product'


function App() {
  // 2. Use at the root of your app
  return (
    <NextUIProvider>
      <AppBar/>
      <div style={{marginTop:'4%',marginBottom:'4%',marginLeft: '10%',marginRight:'10%' }}>
          <Banner/>
          <Product/>
          <Advantage/>
      </div>
      <center>© 2023 Gestar Cloud. All Rights Reserved.</center>
    </NextUIProvider>
  );
}

export default App;
