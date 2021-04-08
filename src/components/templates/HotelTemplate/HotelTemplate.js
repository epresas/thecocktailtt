import React, { Suspense } from 'react'
import Header from '../../organisms/Header/Header';
import HotelCard from '../../organisms/HotelCard/HotelCard';
import Title from '../../atoms/Title/Title';
import Rating from '../../molecules/Rating/Rating';

import { useTranslation } from 'react-i18next';


const HotelTemplate = ({plans, planClicked, rating}) => {
  const { t } = useTranslation();

  return (
    <Suspense fallback="loading">
      <main className='grid--fluid'>
        <Header></Header>
        <Title primary>
          <span className='title__prefix'>{t('hotel.tabName')}</span>
          <span className='title'>{t('hotel.hotelName')}</span>
          <Rating rating={5} />
        </Title>
        <section className='grid__row grid__row--centered'>
          {plans.map(plan => (
            <div className='grid__col-12 grid__col-sm-6 grid__col-md-4 grid__col-xl-2'>
              <HotelCard 
                id={`plan_${plan.id}`}
                name={`plan_${plan.id}`}
                key={plan.id}
                selected={plan.selected}
                features={plan.planFeatures}
                label={t('hotel.selectPlanLabel')}
                title={plan.planName}
                cardClicked={planClicked}
              />
            </div>
          ))}
        </section>
      </main>
    </Suspense>
  )
}

export default HotelTemplate;
