import React, { Component } from 'react';
import api from "../../services/api";
import { Redirect } from "react-router-dom";

import "./styles.css";

export default class Product extends Component{
    
    state = {        
        product: {}, redirect: false,        
    };    
    
    async componentDidMount(){
        const { id } = this.props.match.params;

        const response = await api.get(`/products/${id}`);

        this.setState({ product: response.data });
    }

    async excluir (id) {               
        console.log("Processando: ");

        const response = await api.delete(`/products/${id}`);

        console.log("Excluido - id: " + id);                

        this.setState({ redirect: true });
    }       

    render () {
        const { product } = this.state; 
                
        if (this.state.redirect) {            
            return <Redirect to={"/"} />
        }          
        
        return (
            <div>
                <div className="product-info">
                    <h1>{ product.title }</h1>

                    <p>{ product.description }</p>

                    <p>
                        URL: <a href={ product.url }>{ product.url }</a>
                    </p>
                </div>

                <div className="product-action">

                    <button onClick= { () => this.excluir(product._id) } >Excluir</button>                                                                                             
                                                                                     
                </div>
            </div>
        );
    }
}