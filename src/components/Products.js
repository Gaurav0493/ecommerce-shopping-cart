import React, { Component } from 'react';
import util from '../util'
export default class Products extends Component {

    render() {
        const productItems = this.props.products.map(product => (
            <div className="col-md-4" key={product.id}>
                <div className="thumbnail text-center">
                    <a href={`#${product.id}`}onClick={(e)=>this.props.handleAddToCart(e, product)}>
                        <img src={product.src_1} alt={product.title} />
                        <p>{product.title}</p>                        
                    </a>
                    <b>{util.formatCurrency(product.price)}</b>
                    <br/>
                    <button className="btn btn-primary" onClick={(e)=>this.props.handleAddToCart(e, product)}>Add to cart</button>
                </div>
            </div>
        ));

        return (
            <div className="row product-list">
                {productItems}
            </div>
        )
    }
}
