import React from "react";

//developer mode


class Cart extends React.Component {

    constructor(props) {
        super(props);
    }

    finalSubtotal = 0
    cart = this.props.data;


    render() {


        const listItems = this.cart.map((ele) => {


            this.finalSubtotal += (Number(ele.price) * Number(ele.count))

            console.log(ele.price);
            return (
                <div className="row my-2">

                    <div className="col-12 col-lg-3">
                        <img src={ele.images}
                            className="img-fluid m-3" alt="product image"
                            style={{ height: 150, width: 200 }}
                        />
                    </div>

                    <div className="col-12 col-lg-9">
                        <h5>{ele.brief}</h5>
                        <h5 className="my-3 text-danger">₹  {ele.price}</h5>
                        <p>
                            <span className="mr-2">Qty:</span>
                            <button className="btn btn-primary">-</button>
                            <span className="border p-2" >{ele.count}</span>
                            <button className="btn btn-primary">+</button>
                        </p>
                        <div className="row my-1">

                            <div className="col-6">
                                <small className="btn"><i className="far fa-heart fa-lg mr-2"></i>Move to Wishlist</small>
                            </div>

                            <div className="col-6">
                                <small onClick={() => this.props.del(ele)} className="btn"><i class="far fa-trash-alt mr-2"></i>Remove</small>
                            </div>
                        </div>
                        <hr />
                        <div className="d-flex m-3">
                            <h6>Subtotal:</h6>
                            <h6 className="ml-auto">₹ {Number(ele.count) * Number(ele.price)}</h6>
                        </div>
                    </div>

                </div>)
        })


        return (
            <div>
                <h1 className="font-weight-normal">Shopping Cart</h1>
                <div className="card mb-3" >
                    <div className="row">
                        <div className="col-12 col-lg-8">
                            {listItems}
                        </div>
                        <div className="col-12 col-lg-4 border bg-light">
                            <div className="d-flex my-2 justify-content-between">
                                <h6 className="d-flex align-items-center">COUPON</h6>
                                <input placeholder="Enter coupon code" className="form-control mx-2" />
                                <button className="btn btn-info">Apply</button>
                            </div>

                            <hr />
                            <div className="my-3">
                                <h5>ORDER SUMMARY</h5>
                                <div className="d-flex m-3">
                                    <h6>Subtotal:</h6>
                                    <h6 className="ml-auto">₹ {this.state.finalSubtotal}</h6>
                                </div>
                                <div className="d-flex m-3">
                                    <h6>Tax(GST):</h6>
                                    <h6 className="ml-auto">₹ {Math.floor(0.18 * this.state.finalSubtotal)}</h6>
                                </div>
                                <hr />
                                <div className="d-flex m-3">
                                    <h6>Total:</h6>
                                    <h6 className="ml-auto">₹ {this.state.finalSubtotal + Math.floor(0.18 * this.state.finalSubtotal)}</h6>
                                </div>



                            </div>

                        </div>

                    </div>
                </div>
            </div >
        )
    }

}


export default Cart;
