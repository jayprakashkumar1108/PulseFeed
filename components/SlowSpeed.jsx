import { fontSize } from '@mui/system';
import React, { Component } from 'react';

export default class SlowSpeed extends Component {
    GIF_URL="https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(https://www.google.com/url?sa=i&url=https%3A%2F%2Fgiphy.com%2Fexplore%2Floading&psig=AOvVaw2Ox2R1O5SoJ5Orcmg9760M&ust=1715056078787000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKDC5fSX-IUDFQAAAAAdAAAAABA5).gif"
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',  width:'100%', borderRadius:'2rem'}}>
                <i style={{fontSize:'2rem', color:'red'}}>loading....</i>
            </div>
        );
    }
}
