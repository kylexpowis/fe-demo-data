export const formatCurrency = (value, toFixed = 2) => {
    if (value === null || value === undefined || isNaN(value)) return "—";
    return `$${Number(value).toFixed(toFixed).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
};

export const replaceSlashWithUnderscore = (str) => {
    return str.replace(/\//g, '_');
}