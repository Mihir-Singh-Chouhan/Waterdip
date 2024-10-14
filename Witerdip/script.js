document.getElementById('filter-btn').addEventListener('click', function() {
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
    // Fetch and update charts based on selected date range
    fetchDataAndUpdateCharts(startDate, endDate);
});

function fetchDataAndUpdateCharts(startDate, endDate) {
    // Fetch data from your dataset based on selected dates
    // For demonstration, using mock data

    const mockData = {
        timeSeries: [{ date: '2023-10-01', visitors: 100 }, { date: '2023-10-02', visitors: 150 }],
        columnData: [{ country: 'USA', visitors: 300 }, { country: 'Canada', visitors: 200 }],
        sparklineAdults: [50, 60, 70],
        sparklineChildren: [20, 30, 25]
    };

    updateTimeSeriesChart(mockData.timeSeries);
    updateColumnChart(mockData.columnData);
    updateSparklineCharts(mockData.sparklineAdults, mockData.sparklineChildren);
}

function updateTimeSeriesChart(data) {
    const options = {
        chart: { type: 'line' },
        series: [{ name: 'Visitors', data: data.map(d => d.visitors) }],
        xaxis: { categories: data.map(d => d.date) }
    };
    const chart = new ApexCharts(document.querySelector("#time-series-chart"), options);
    chart.render();
}

function updateColumnChart(data) {
    const options = {
        chart: { type: 'bar' },
        series: [{ name: 'Visitors', data: data.map(d => d.visitors) }],
        xaxis: { categories: data.map(d => d.country) }
    };
    const chart = new ApexCharts(document.querySelector("#column-chart"), options);
    chart.render();
}

function updateSparklineCharts(adultData, childrenData) {
    const adultOptions = {
        chart: { type: 'line', sparkline: { enabled: true } },
        series: [{ data: adultData }]
    };
    const childrenOptions = {
        chart: { type: 'line', sparkline: { enabled: true } },
        series: [{ data: childrenData }]
    };

    const adultChart = new ApexCharts(document.querySelector("#sparkline-adults"), adultOptions);
    const childrenChart = new ApexCharts(document.querySelector("#sparkline-children"), childrenOptions);
    
    adultChart.render();
    childrenChart.render();
}
