import React from 'react';

// import Blog from './Blog';
// import Produk from '../Class/Produk';
import Parent from '../Class/Parent';

const Home = () => {
    return  <div>
        {
            <Parent stock="15"/>
        }
               {/* oke */}
            {/* <Produk nama="Iphone 12" harga="30000000" stock="15" />
                    <Produk nama="Iphone 13" harga="40000000" stock="16" />
                    <Produk nama="Iphone 14" harga="50000000" stock="17" />
                    <Produk nama="Iphone 15" harga="60000000" stock="18" /> */}
               
                {/* 
                <Blog
                tanggal="1 Juni 2022"
                judul="judul 1",
                summary="summmary 1"
                />
                <Blog
                tanggal="2 Juni 2022"
                judul="judul 2",
                summary="summmary 2"
                />
                <Blog
                tanggal="3 Juni 2022"
                judul="judul 3",
                summary="summmary 3"
                />

                */}
        </div>
}


export default Home;