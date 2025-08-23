
import React from "react";
import productDetails from "../data/ProductsData";
import "./Plans.css";

const Plans = () => {
  const plans = ["weeklyPlan", "monthlyPlan", "weekendJuice"];

  return (
    <div className="plans-container">
      <h1 className="plans-title">Our Plans</h1>
      <div className="plans-list">
        {plans.map((planKey) => {
          const plan = productDetails[planKey];
          return (
            <div key={planKey} className="plan-card">
             
              <div className="plan-details">
                <h2>{plan.name}</h2>
                <img src={plan.img} alt={plan.name} className="plan-image" />
                
                <p>{plan.description}</p>
                <p className="plan-price">₹{plan.price}</p>
              </div>

             
              <div className="fruit-list">
  <h4 className="ingredients-title">Ingredients</h4>
  {plan.fruits.map((fruit, index) => (
    <div className="fruit-item" key={index}>
      <img src={fruit.img} alt={fruit.name} />
      <span>{fruit.name}</span>
    </div>
  ))}
</div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Plans;
