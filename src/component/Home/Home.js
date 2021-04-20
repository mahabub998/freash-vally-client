import React from 'react';
import Header from './Header/Header';
import Products from './Products/Products';

const Home = () => {
    const inputStyle = {
        width: '30%',
        padding: '10px',
        border: 'none',
        borderBottom: '5px solid #2D86EF',
        borderRadius: '20px 0px 0px 0px'
    }
    const batStyle = {
        borderRadius: '0px 20px 0px 0px',
        padding: '12px'
    }
    return (
        <div>
            <Header></Header>
            <div style={{ textAlign: 'center', marginTop: '3%', marginBottom: '3%' }}>
                <h1>I GROW BY HELPING PEOPLE IN NEED.</h1><br />
                <input style={inputStyle} type="text" placeholder="       Search..." /><button style={batStyle} type="button" class="btn btn-primary">Primary</button>
            </div>
            <Products></Products>
        </div>
    );
};

export default Home;