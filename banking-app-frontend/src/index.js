import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { Dashboard } from './Components/dashboard';
import { NewCustomer } from './Components/new-customer';
import { Deposit} from './Components/deposit';
import { Withdraw } from './Components/withdraw';
import { Transfer } from './Components/transfer';
import { Balance } from './Components/balance';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />}/>
      <Route path="/new" element={<NewCustomer/>}/>
      <Route path="/deposit" element={<Deposit />}/>
      <Route path="/withdraw" element={<Withdraw />}/>
      <Route path="/balance" element={<Balance />}/>
      <Route path="/transfer" element={<Transfer />}/>
    </Routes>
  </BrowserRouter>
);
