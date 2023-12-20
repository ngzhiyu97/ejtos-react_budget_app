import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useState } from "react";

const CurrencyDropDown = () =>{
    const {currency} = useContext(AppContext);
    const {dispatch} = useContext(AppContext);
    const [newCurrency, setCurrency] = useState(currency);
    const {currencyName} = useContext(AppContext);

    const updateCurrency = (event)=>{
        const newCurrency = event.target.value;
        setCurrency(newCurrency);

        dispatch({
            type: 'CHG_CURRENCY',
            payload:event.target
        });

    }

    return (
        <select className="custom-select" id="currencySelect" onChange={updateCurrency}>
            <option value="none" selected disabled hidden>Currency ({currency} {currencyName})</option>
            <option value="$" name="Dollar">$ Dollar</option>
            <option value="£" name="Pound">£ Pound</option>
            <option value="€" name="Euro">€ Euro</option>
            <option value="₹" name="Ruppee">₹ Ruppee</option>
        </select>
    );

}

export default CurrencyDropDown;