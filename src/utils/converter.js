import months from '../assets/content/months';

function converter(dataItem) {
    
    const dataPoints = Object.keys(dataItem).map(index => {
        const temperature = dataItem[index].temperature
        const month = dataItem[index].month
        return { label: getMonthById(month), y: temperature }
    })

    return dataPoints;
};
    
function getMonthById(monthId) {
    return months.find((month) => {
        return month.id === monthId;
    }).title
}

export default converter