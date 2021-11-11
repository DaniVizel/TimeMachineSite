console.log("im working!");
// PARSING THE DATA

async function getData() {
    const response = await fetch('plant_data.csv');
    const data = await response.text();
    // console.log(data);

    const rows = data.split('\n').slice(4);
    rows.forEach(elt => {
        const row = elt.split(',');
        const week = row[0];
        xlabels.push(week);
        
        const pothos = row[1];
        ypothos.push(pothos);

        const calathea = row[2];
        ycalathea.push(calathea);

        const snake = row[3];
        ysnake.push(snake);

        const ivy = row[4];
        yivy.push(ivy);

        const pearl = row[5];
        ypearl.push(pearl);

        // console.log(week, pothos, calathea, snake, ivy, pearl);

    });
}
// followed tutorial to learn to parse data from csv
// https://www.youtube.com/watch?v=RfMkdvN-23o&ab_channel=TheCodingTrain

// MAKING THE CHART

const xlabels = [];
const ypothos = [];
const ycalathea = [];
const ysnake = [];
const yivy = [];
const ypearl = [];

var pothosCol = "#519E70"
var pothosWidth = 5;

var calatheaCol = 'rgba(0,0,0,0.5)'
var calatheaWidth = 1;

var snakeCol = 'rgba(0,0,0,0.5)'
var snakeWidth = 1;

var ivyCol = 'rgba(0,0,0,0.5)'
var ivyWidth = 1;

var pearlCol = 'rgba(0,0,0,0.5)'
var pearlWidth = 1;



chartIt();


async function chartIt(){
    await getData();
    const ctx = document.getElementById('chart').getContext('2d');
    Chart.defaults.font.size = 11;
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: xlabels,
            datasets: [
            {
                label: 'Pothos popularity (by searches)',
                data: ypothos,
                borderColor: [
                    pothosCol,
                ],
                pointRadius: 0,
                pointHoverRadius: 5,
                pointHitRadius: 10,
                pointHoverBackgroundColor: "#66c68d",
                borderWidth: pothosWidth,
                borderJoinStyle: "round",

            },
            {
                label: 'Calathea popularity (by searches)',
                data: ycalathea,
                borderColor: [
                    calatheaCol,
                ],
                pointRadius: 0,
                pointHoverRadius: 5,
                pointHitRadius: 10,
                pointHoverBackgroundColor: "#66c68d",
                borderWidth: calatheaWidth,
                borderJoinStyle: "round",

            },
            {
                label: 'Snake Plant popularity (by searches)',
                data: ysnake,
                borderColor: [
                    snakeCol,
                ],
                pointRadius: 0,
                pointHoverRadius: 5,
                pointHitRadius: 10,
                pointHoverBackgroundColor: "#66c68d",
                borderWidth: snakeWidth,
                borderJoinStyle: "round",

            },
            {
                label: 'Common Ivy popularity (by searches)',
                data: yivy,
                borderColor: [
                    ivyCol,
                ],
                pointRadius: 0,
                pointHoverRadius: 5,
                pointHitRadius: 10,
                pointHoverBackgroundColor: "#66c68d",
                borderWidth: ivyWidth,
                borderJoinStyle: "round",

            },
            {
                label: 'String-of-Pearls popularity (by searches)',
                data: ypearl,
                borderColor: [
                    ivyCol,
                ],
                pointRadius: 0,
                pointHoverRadius: 5,
                pointHitRadius: 10,
                pointHoverBackgroundColor: "#66c68d",
                borderWidth: pearlWidth,
                borderJoinStyle: "round",
            },
        ]
        },
        options: {
            maintainAspectRatio: false,
            scales: {
                y: {
                    grid: {display: false},

                },
                x: {
                    grid:
                        {color:"#edbd4e",
                        lineWidth: 3},
                    ticks:{
                        callback: function(value, index, values) {
                            // where 3 is the line index you want to display
                            return (index === 175) ? "Week of WHO declaring global pandemic" : null;
                          },
                    },
                        
                    },
        
            },
            plugins: {
                tooltip: {
                    yAlign: 'bottom',
                },

                legend: {display: false},
            },
            onHover: function(event, item) { 
                if (item.length) {
                    var dataIndex = item[0].index;
                    
                    // if (isIndex){
                        // console.log(ypothos[dataIndex]);
                    // } else if (isPothos){
                        //console.log(ypothos[dataIndex]); //change dataset name based on names assigned above
                        $(".greenfill").css("height", (ypothos[dataIndex]) + "%");
                    //}
                }
            }
        }
    });
}
// referenced these for creating the chart
// https://www.chartjs.org/docs/latest/
// https://www.youtube.com/watch?v=5-ptp9tRApM&ab_channel=TheCodingTrain
// https://jsfiddle.net/fraser/kuwh3nzs/


