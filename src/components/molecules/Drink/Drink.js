import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import Image from '../../atoms/Image/Image';
import Badge from '../../atoms/Badge/Badge'

const Drink = ({name, description, foodPairing, abv, img}) => {
  const { t } = useTranslation();

    /**
   * Formats the array of food paring texts.
   *
   * @param {Array} textArr - Array of strings to parse
   * @returns {String} - The classes that the badge will have.
   */
  const parsePairingText = (textArr) => {
    return `${textArr.slice(0, -1).join(', ')} y ${textArr[textArr.length - 1]}`;
  };

  const paringText = parsePairingText(foodPairing);

  return <li className='drink'>
    <div className='drink__image'>
      <Image src={img} alt={name} />
    </div>
    <div className='drink__detail'>
      <h3 className='drink__name'>{name}</h3>
      <p className='drink__description'>{description}</p>
      <p className='drink__pairing'>
        <span className='drink__label'>{t('drinks.pairingLabel')}</span> 
        {paringText}
      </p>
    </div>
    <span className='drink__badge'>
      <Badge abv={abv}/>
    </span>
  </li>
}

Drink.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  foodPairing: PropTypes.array.isRequired,
  abv: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
}

export default Drink;
