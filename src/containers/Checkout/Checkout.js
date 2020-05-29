import React, {Component} from 'react';
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary';


class Checkout extends Component {
    constructor(props){
        super(props)
        
        this.state={
            ingredients: {
                salad: 1,
                meat: 1,
                cheese: 1,
                bacon: 1,
            }
        }

        this.checkoutCancelledHandler = this.checkoutCancelledHandler.bind(this);
        this.checkoutContinuedHandler = this.checkoutContinuedHandler.bind(this);
    }

    componentDidMount(){
        const query = new URLSearchParams(this.props.location.search);
        console.log(query);
        const ingredients = {};
        for (let param of query.entries()){
            ingredients[param[0]] = +param[1];
        }

        this.setState({ingredients: ingredients});
    }



    checkoutCancelledHandler(){
        this.props.history.replace('/');
    }

    checkoutContinuedHandler(){
        this.props.history.replace('/checkout/contact-data')
    }

    render(){
        return(
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}
                    />
            </div>
        )
    }
}


export default Checkout;