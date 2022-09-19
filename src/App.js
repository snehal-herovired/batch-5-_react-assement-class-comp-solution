
import React,{Component} from 'react';

class Products extends Component{

    constructor(props){
        super(props);
        this.state = {
            cart: 0,
            products: [
                {
                    id: 101,
                    name: "product 1",
                    quantity: 0
                },
                {
                    id: 102,
                    name: "product 2",
                    quantity: 0
                },
                {
                    id: 103,
                    name: "product 3",
                    quantity: 0
                }
            ]
        }
        this.increaseQuantity = this.increaseQuantity.bind(this);
    }

    render(){
        return(
            <div>
                {this.state.products.length != 0? <div>
                    <h2>Cart : {this.state.cart}</h2>
                    {this.state.products.map(item => {
                        return (<div>
                            <h3>{item.name} : {item.quantity}</h3> 
                            <button onClick={()=>{this.increaseQuantity(item.id)}}>ADD</button>   
                            <button onClick={()=>{this.decreaseQuantity(item.id)}}>Remove</button>
                        </div>);
                    } )}
                </div>:<h1>Product list is empty</h1>}
            </div>
        );
    }

    increaseQuantity(id){
        let newList = [...this.state.products];
        let newCart = this.state.cart;
        for(let i = 0; i < newList.length; i++){
            if(newList[i].id == id){
                newList[i].quantity += 1;
                newCart += 1;
            }
        }
        this.setState({cart: newCart, products: newList});
    }
   decreaseQuantity(id){
    let newList = [...this.state.products];
    let newCart = this.state.cart;
    for(let i = 0; i < newList.length; i++){
        if(newList[i].quantity>0){
          if(newList[i].id == id){
            newList[i].quantity -= 1;
            newCart -= 1;
        }
        }
    }
    this.setState({cart: newCart, products: newList});
   }
}

export default Products;
