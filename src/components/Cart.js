import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';

const Cart = () => {
    return(
        <div>
          쇼핑카트입니다.
          <Outlet></Outlet>
        </div>
    );
}

export default Cart;