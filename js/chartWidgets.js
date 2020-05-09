Chart.defaults.global.defaultFontColor = '#A7A7A7';
Chart.defaults.global.defaultFontSize = 11;
Chart.defaults.global.defaultFontFamily = "'Open Sans'";

//Line Graph

const trafficCanvas = document.querySelector("#traffic-chart");

let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
    data: [0, 500, 1000, 750, 1250, 1750, 1250, 1500, 1000, 1500,
    2000],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1.5,
    borderColor: 'rgb(104, 91, 207, 0.5)',
    pointBackgroundColor: 'rgb(252, 252, 252)',
    pointBorderColor: 'rgb(86, 73, 126)',
    radius: 7,
    pointHoverRadius: 7,
    lineTension: 0,
    }]
    };

let trafficOptions = {
    aspectRatio: 4,
    animation: {
    duration: 0
    },
    scales: {
    yAxes: [{
    ticks: {
    beginAtZero:true,
    suggestedMin: 0,
    suggestedMax: 2500
    }
    }]
    },
    legend : {
    display: false
    }
};

let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});

//Bar Graph

const dailyCanvas = document.querySelector("#daily-chart");

// data for daily traffic bar chart
const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
    label: '# of Hits',
    data: [75, 115, 175, 125, 225, 200, 100],
    backgroundColor: '#7477BF',
    borderWidth: 1,
    barThickness: 35,
    }]
    };
    const dailyOptions = {
    scales: {
    yAxes: [{
    ticks: {
    beginAtZero:true
    }
    }]
    },
    legend : {
    display: false
    }
    }

    let dailyChart = new Chart(dailyCanvas, {
        type: 'bar',
        data: dailyData,
        options: dailyOptions
        });

//Doughnut Chart

const mobileCanvas = document.getElementById("mobile-chart");

const mobileData = {
    labels: ["Phones", "Tablets", "Desktop"],
    datasets: [{
    label: '# of Users',
    data: [500, 550, 2000],
    borderWidth: 0,
    rotation: 3,
    backgroundColor: [
        '#51B6C8',
        '#78CF82',
        '#7477BF'
    
    ]
    }]
    };

    const mobileOptions = {
        rotation: Math.PI * 1,
        legend: {
        position: 'right',
        labels: {
        boxWidth: 20,
        padding: 15,
        //fontStyle: 'bold',
        fontSize: 16,
        reverse: true
        }
        }
        }

        let mobileChart = new Chart(mobileCanvas, {
            type: 'doughnut',
            data: mobileData,
            options: mobileOptions
            });
