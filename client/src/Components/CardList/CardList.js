import React from "react";
import OrderCard from "../OrderCard/OrderCard";

const CardList = (props) => {
  // const cardsArray = orders.map(order => (
  //   <OrderCard
  //     restaurant_id={order.restaurant_id}
  //     total_cost={order.email}
  //     id={order._id}
  //     source={order.source}
  //     status={order.status}
  //     delivery_boy={order.delivery_boy}
  //     createdAt={order.createdAt}
  //      />
  // ));
  console.log(props.orders);
  return (
    <div>
      <h1>hello</h1>
      {props.orders.map((order) => console.log(order))}
    </div>
  );
};
export default CardList;
