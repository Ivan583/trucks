export function useSortedFlights(flights, sort, query) {
    const filteredFlights = [...flights]
        .filter(flight => flight.driver.toLowerCase()
        .includes(query.toLowerCase()));

    const drivers = filteredFlights
        .map(flight => flight.driver)
        .reduce((acc, curr) => 
        acc.includes(curr) ? acc : [...acc, curr], []);

    const groupSummary = drivers.map(driver => {
        let summ = filteredFlights
        .filter(item => item.driver === driver)
        .map(flight => flight.weight)
        .reduce((acc, curr) => acc + curr, 0);
        return {driver, weight: summ};
        });

    const sortedFlights = groupSummary
        .sort((a, b) => b[sort] - a[sort]);

        return sortedFlights;
}

export function useTotalSummary(flights) {
    const total = flights
.map(item => item.weight)
.reduce((acc, curr) => acc + curr, 0);
return total;
}
