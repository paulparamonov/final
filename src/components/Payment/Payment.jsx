import React, {useState, useEffect, useContext} from 'react';
import { cartContext } from "../../contexts/cartContext";
import { useAuth } from "../../contexts/authContext";
import { useNavigate } from 'react-router-dom';
import CartItem from "../Cart/CartItem"
import "./Payment.css"
import Cart from '../Cart/Cart';

const Payment = () => {
    const { changeProductCount } = useContext(cartContext);
    

    const [form, setForm] = useState({})

    const navigate = useNavigate()

    const {cart, createPayment } = useContext(cartContext);

    const {user: {email}} = useAuth();

    useEffect(() => {
        setForm(prevstate => ({...prevstate, ...cart, email}))
    }, [cart, email])

    const inputHandler = name => ({target: {value}}) => {
        setForm(prevstate => ({...prevstate, [name]: value}))
    }

    const sendForm = (e) => {
        e.preventDefault();

        // json server send data 
        createPayment(form).then(() => {
            navigate('/')
        })
    } 

    return (
        <div className='cart-payment-form' style={{marginTop:"45px"}}>
            <form onSubmit={sendForm}>
                <ul>
                    {cart.products?.map(value => <li>
                        <div className="product-card-table">
                            <img width={50} src={value.item.image1}/>  
                            <span style={{color:"whitesmoke"}}>
                            {value.item.brand}  
                            </span>
                            <span style={{textAlign: 'right',color:"whitesmoke"}}>
                                {  value.count  + "шт"}
                            </span>
                            <span style={{textAlign: 'right',color:"whitesmoke"}}>
                                {"цена: " + value.item.price + "$"}
                            </span>
                            <span style={{textAlign: 'right',color:"whitesmoke"}}>
                                {"всего:" + value.subPrice + "$"}
                            </span>
                            
                            
                        </div>
                    </li>)}
                </ul>

                <div>
                <span style={{textAlign: 'right', color:"whitesmoke"}}>
                {<h2 style={{color:"whitesmoke"}}>Total: {cart?.totalPrice}$</h2>}
                <img
        src="https://www.watchesofswitzerland.com/medias/usa-payment-options-group-1121.png?context=bWFzdGVyfHJvb3R8NTA1M3xpbWFnZS9wbmd8aDIwL2hkNS85MTIyMTcxMTI1NzkwLnBuZ3wzZDQ5ZGZhMjc2NjM4MzBlZjZhMjk1NzcyOWEyOGUwYzVjNGZiNzAzZGZmYjQ5Y2U5M2E1MTUxYzU5ZWRmMjVj"
        alt=""
      />
                            </span>
                            <br/>
                            <label>Name Surname</label>
                            <br/>
                    <input 
                        placeholder="IVAN IVANOV"
                        type='text'
                        onChange={inputHandler('name')}
                        maxLength="20"
                        required="required" 
                     />
                    <br/>
                    <label>Card num</label>
                    <br/>
                    <input 
                        placeholder="2345 1234 1234 1234"
                        type='number'
                        onChange={inputHandler('cardNumber')}
                        required="required" 
                     />
                    <br/>
                    <label>Card date</label>
                    <br/>
                    <input 
                        placeholder="09/22"
                        type='text'
                        onChange={inputHandler('cardDate')}
                        required="required" 
                        maxLength="5"
                     />
                    <br/> 
                    <label>CVC</label> 
                    <br/>
                    <input 
                        placeholder="555"
                        type='number'
                        onChange={inputHandler('cardCVC')}
                        required="required" 
                        maxLength="3"
                     />
                    <br/>  
                    <label>Phone number</label>  
                    <br/>  
                    <input 
                        placeholder="+996703219464"
                        type='tel'
                        onChange={inputHandler('number')}
                        required="required" 
                        maxLength="14"
                     />
                    <br/>
                    <label>Adress</label>
                    <br/>
                    <input 
                        placeholder="Bishkek.Manasa.26" 
                        type='text'
                        onChange={inputHandler('address')}
                        required="required" 
                        />
                </div>
                
                <button  type="submit" style={{marginTop:"10px" , padding:"10px", borderRadius:"5px", fontSize:"20px"}}>Оплатить</button>
            </form>
        </div>
    );
};

export default Payment;