const refreshFormatPrice = (price: number, options = {locale: 'en-US', currency: 'USD'}): string => {
    const newFormatPrice = new Intl.NumberFormat(options.locale,
        {style: 'currency', currency: options.currency});
    return newFormatPrice.format(price);
};

export {
    refreshFormatPrice,
};
