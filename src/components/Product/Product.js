import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import styles from './Product.module.scss';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = props => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const changeColor = (color) => setCurrentColor(color);
  const changeSize = (size) => setCurrentSize(size);

  const price = useMemo(() => {
    const sizeObj = props.sizes.find(size => size.name === currentSize);
    const additionalPrice = sizeObj ? sizeObj.additionalPrice : 0;
    return props.basePrice + additionalPrice;
  }, [currentSize, props.basePrice, props.sizes]);

  const addToCart = (e) => {
    e.preventDefault();
    console.group('Summary');
    console.log(`Product: ${props.title}`);
    console.log(`Price: ${price}$`);
    console.log(`Size: ${currentSize}`);
    console.log(`Color: ${currentColor}`);
    console.groupEnd();
  };

  return (
    <article className={styles.product}>
      <ProductImage
        name={props.name}
        title={props.title}
        currentColor={currentColor}
      />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {price}$</span>
        </header>
        <ProductForm
          sizes={props.sizes}
          colors={props.colors}
          currentSize={currentSize}
          currentColor={currentColor}
          changeSize={changeSize}
          changeColor={changeColor}
          addToCart={addToCart}
        />
      </div>
    </article>
  );
};

Product.propTypes = {
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    additionalPrice: PropTypes.number,
  })).isRequired,
  name: PropTypes.string.isRequired,
};

export default Product;