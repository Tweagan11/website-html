import React from 'react';
import Prod1 from './hoodie.jpeg';

function Product({ description }) {
    return (
        <button className="product-item" onClick={onProductClick}>
            {description}
        </button>
    )
}

export default function merchDisplay() {
    return (
        <>
        <div class="product-list" id="product-list">
            <div class="product-item">
                <div class="product-image">
                    <img src={Prod1} alt="Hoodie"/>
                </div>
                <div class="product-details">
                    <h2>Product Name 1</h2>
                    <p class="description">This is a short description of the product.</p>
                    <p class="size">Size: Small</p>
                    <p class="quantity">Quantity: 10</p>
                    <p class="price">$20.00</p>
                </div>
            </div>
            <div class="product-item">
                <div class="product-image">
                    <img src="profile.png"/>
                </div>
                <div class="product-details">
                    <h2>Product Name 2</h2>
                    <p class="description">This is a short description of the product.</p>
                    <p class="size">Size: Medium</p>
                    <p class="quantity">Quantity: 5</p>
                    <p class="price">$30.00</p>
                </div>
            </div>
            <div class="product-item">
                <div class="product-image">
                    <img src="hoodie.jpeg"/>
                </div>
                <div class="product-details">
                    <h2>Product Name 3</h2>
                    <p class="description">This is a short description of the product.</p>
                    <p class="size">Size: Large</p>
                    <p class="quantity">Quantity: 2</p>
                    <p class="price">$40.00</p>
                </div>
            </div>
            <div class="product-item">
                <div class="product-image">
                    <img src="product-1.jpg"/>
                </div>
                <div class="product-details">
                    <h2>Product Name 1</h2>
                    <p class="description">This is a short description of the product.</p>
                    <p class="size">Size: Small</p>
                    <p class="quantity">Quantity: 10</p>
                    <p class="price">$20.00</p>
                </div>
            </div>

            <div class="product-item">
                <div class="product-image">
                    <img src="product-2.jpg"/>
                </div>
                <div class="product-details">
                    <h2>Product Name 2</h2>
                    <p class="description">This is a short description of the product.</p>
                    <p class="size">Size: Medium</p>
                    <p class="quantity">Quantity: 5</p>
                    <p class="price">$30.00</p>
                </div>
            </div>
            <div class="product-item">
                <div class="product-image">
                    <img src="product-3.jpg"/>
                </div>
                <div class="product-details">
                    <h2>Product Name 3</h2>
                    <p class="description">This is a short description of the product.</p>
                    <p class="size">Size: Large</p>
                    <p class="quantity">Quantity: 2</p>
                    <p class="price">$40.00</p>
                </div>
            </div>
        </div>
        </>
    )
}