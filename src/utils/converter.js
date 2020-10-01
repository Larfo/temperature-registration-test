import months from '../assets/content/months';

function converter(dataItem) {
    return Object.keys(dataItem).map(index => {
        const temperature = dataItem[index].temperature
        const monthId = dataItem[index].month
        return { label: getMonthById(monthId), y: temperature, monthId: monthId }
    }).sort((a, b) => a.monthId - b.monthId)
};
    
function getMonthById(monthId) {
    return months.find((month) => {
        return month.id === monthId;
    }).title
}

export default converter