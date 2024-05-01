import React from 'react'
import './Menu.css'



export default function Menu(){
  return(
    <div>
    <div class="menu">
    <h1>Restaurant Menu</h1>
    <div class="dish">
        <span class="dish-name">Spaghetti Carbonara</span>
        <span class="dish-price">$12.99</span>
        <p class="dish-description">Pasta with a creamy sauce, pancetta, and Parmesan cheese.</p>
    </div>
    <div class="dish">
        <span class="dish-name">Chicken Tikka Masala</span>
        <span class="dish-price">$14.99</span>
        <p class="dish-description">Tender pieces of chicken in a spiced tomato and cream sauce.</p>
    </div>
    <div class="dish">
        <span class="dish-name">Margherita Pizza</span>
        <span class="dish-price">$10.99</span>
        <p class="dish-description">Classic pizza with tomato sauce, mozzarella, and basil.</p>
    </div>
    <div class="dish">
        <span class="dish-name">Caesar Salad</span>
        <span class="dish-price">$8.99</span>
        <p class="dish-description">Romaine lettuce, croutons, Parmesan cheese, and Caesar dressing.</p>
    </div>
    <div class="dish">
        <span class="dish-name">Beef Burger</span>
        <span class="dish-price">$11.99</span>
        <p class="dish-description">Juicy beef patty with lettuce, tomato, onion, and pickles.</p>
    </div>
    <div class="dish">
        <span class="dish-name">Fish and Chips</span>
        <span class="dish-price">$13.99</span>
        <p class="dish-description">Deep-fried battered fish with French fries.</p>
    </div>
    <div class="dish">
        <span class="dish-name">Vegetable Stir-Fry</span>
        <span class="dish-price">$9.99</span>
        <p class="dish-description">Assorted vegetables stir-fried in a savory sauce.</p>
    </div>
    <div class="dish">
        <span class="dish-name">Chocolate Brownie</span>
        <span class="dish-price">$5.99</span>
        <p class="dish-description">Warm chocolate brownie served with vanilla ice cream.</p>
    </div>
    <div class="dish">
        <span class="dish-name">Tiramisu</span>
        <span class="dish-price">$6.99</span>
        <p class="dish-description">Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cheese.</p>
    </div>
    <div class="dish">
        <span class="dish-name">Mango Lassi</span>
        <span class="dish-price">$3.99</span>
        <p class="dish-description">Refreshing yogurt-based drink with mango puree.</p>
    </div>
    </div>
    </div>
  )
}