export const formatCurrency = (value) => {
    if (value === null || value === undefined || isNaN(value)) return "—";
    return `$${Number(value).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
};

export const replaceSlashWithUnderscore = (str) => {
    return str.replace(/\//g, '_');
}