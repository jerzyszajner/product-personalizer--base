import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductForm.module.scss';
import Button from '../Button/Button';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';

const ProductForm = ({ sizes, colors, currentSize, currentColor, changeSize, changeColor, addToCart }) => {
    return (
        <form>
            <OptionSize 
                sizes={sizes} 
                currentSize={currentSize} 
                onSizeChange={changeSize} 
            />
            <OptionColor 
                colors={colors} 
                currentColor={currentColor} 
                onColorChange={changeColor} 
            />
          <Button className={styles.button} onClick={addToCart}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
    );
};

ProductForm.propTypes = {
    sizes: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        additionalPrice: PropTypes.number,
    })).isRequired,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    currentSize: PropTypes.string.isRequired,
    currentColor: PropTypes.string.isRequired,
    changeSize: PropTypes.func.isRequired,
    changeColor: PropTypes.func.isRequired,
    addToCart: PropTypes.func.isRequired,
};

export default ProductForm;