import React from 'react'
import Header from '../../organisms/Header/Header';
import HotelCard from '../../organisms/HotelCard/HotelCard';

const HotelTemplate = ({hotelInfo}) => {
  const {stars, hotelName, selectPlanLabel, plans } = hotelInfo;
  return (
    <main>
      <Header></Header>
      <h1>{hotelName}{stars}</h1>
      {plans.map(plan => (
        <HotelCard 
          id={`plan_${plan.id}`}
          name={`plan_${plan.id}`}
          key={plan.id}
          features={plan.planFeatures}
          label={selectPlanLabel}
          title={plan.planName}
        />
      ))}
    </main>
  )
}

export default HotelTemplate;
