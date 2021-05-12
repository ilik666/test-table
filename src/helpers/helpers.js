const refreshFormatPrice = (price, options = {locale: 'en-US', currency: 'USD'}) => {
    const newFormatPrice = new Intl.NumberFormat(options.locale,
        {style: 'currency', currency: options.currency});
    return newFormatPrice.format(price);
};

export {
    refreshFormatPrice,
};
