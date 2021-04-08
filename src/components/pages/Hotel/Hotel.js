import React, { useState, useEffect } from 'react';
import HotelTemplate from '../../templates/HotelTemplate/HotelTemplate';
import useFetch from '../../../hooks/useFetch';

const Hotel = (props) => {
  const [plans, setPlans] = useState(null);
  const data = useFetch('./data.json', {})
  const { response } = data;
  
  useEffect(() => {
    if (response && response.hotel && response.hotel.plans) {
      const updatedPlans = response.hotel.plans.map(plan => {
        plan.selected = false;
        return plan;
      })
      setPlans(updatedPlans)
    }
  }, [response]);

  const onPlanClicked = (event) => {
    event.preventDefault();
    const targetId = parseFloat(event.currentTarget.id.split('_')[1]);
    const selectedPlan = plans.find(plan => plan.id === targetId);
    
    updatePlans(selectedPlan.id);
  }
  
  const updatePlans = (id) => {
    const updatedPlans = [...plans];
    updatedPlans.forEach(plan => {
      plan.selected = plan.id === id;
    });

    setPlans(updatedPlans);
  }
  let template = null;

  if (plans) {
    template = <HotelTemplate 
      plans={plans}
      planClicked={onPlanClicked}
    ></HotelTemplate>
  }
  return template;
}

export default Hotel;
