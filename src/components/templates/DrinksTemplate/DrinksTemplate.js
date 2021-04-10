import React, { Suspense } from 'react'
import { useTranslation } from 'react-i18next';

import Header from '../../organisms/Header/Header';
import Title from '../../atoms/Title/Title';
import Wrapper from '../../atoms/Wrapper/Wrapper';
import DrinksList from '../../organisms/DrinksList/DrinksList';


const DrinksTemplate = ({drinks}) => {
  const { t } = useTranslation();

  return (
    // TODO: implementar loader

    <Suspense fallback="loading">
      <main>
        <Header></Header>
          <Title>
            <span className='title__cushion'>
              {t('drinks.title')}
            </span>
          </Title>
        <Wrapper bordered>
          <Title>
            <span>
              {t('drinks.subtitle')}
            </span>
          </Title>
          <DrinksList drinksList={drinks}/>
        </Wrapper>
      </main>
    </Suspense>
  )
}

export default DrinksTemplate;
