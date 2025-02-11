import ApexCharts from "apexcharts";
window.ApexCharts= ApexCharts

import moment from 'moment';


(Apex.grid = { padding: { right: 0, left: 0 } }),
    (Apex.dataLabels = { enabled: !1 });
var randomizeArray = function (e) {
        for (var t, o, a = e.slice(), r = a.length; 0 !== r; )
            (o = Math.floor(Math.random() * r)),
                (t = a[--r]),
                (a[r] = a[o]),
                (a[o] = t);
        return a;
    },
    sparklineData = [
        47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
        61, 27, 54, 43, 19, 46,
    ],
    colorPalette = ["#00D8B6", "#008FFB", "#FEB019", "#FF4560", "#775DD0"],
    colors = ["#6658dd"],
    spark1 = {
        chart: { type: "area", height: 160, sparkline: { enabled: !0 } },
        stroke: { width: 2, curve: "straight" },
        fill: { opacity: 0.2 },
        series: [{ name: "Sales ", data: randomizeArray(sparklineData) }],
        yaxis: { min: 0 },
        colors: colors,
        title: { text: "$424,652", offsetX: 10, style: { fontSize: "22px" } },
        subtitle: {
            text: "Total Sales",
            offsetX: 10,
            offsetY: 35,
            style: { fontSize: "13px" },
        },
    },
    colors =
        (new ApexCharts(document.querySelector("#spark1"), spark1).render(),
        ["#DCE6EC"]),
    spark2 = {
        chart: { type: "area", height: 160, sparkline: { enabled: !0 } },
        stroke: { width: 2, curve: "straight" },
        fill: { opacity: 0.2 },
        series: [
            { name: "Expenses ", data: randomizeArray(sparklineData) },
        ],
        yaxis: { min: 0 },
        colors: colors,
        title: { text: "$235,312", offsetX: 10, style: { fontSize: "22px" } },
        subtitle: {
            text: "Expenses",
            offsetX: 10,
            offsetY: 35,
            style: { fontSize: "13px" },
        },
    },
    colors =
        (new ApexCharts(document.querySelector("#spark2"), spark2).render(),
        ["#f672a7"]),
    spark3 = {
        chart: { type: "area", height: 160, sparkline: { enabled: !0 } },
        stroke: { width: 2, curve: "straight" },
        fill: { opacity: 0.2 },
        series: [{ name: "Net Profits ", data: randomizeArray(sparklineData) }],
        xaxis: { crosshairs: { width: 1 } },
        yaxis: { min: 0 },
        colors: colors,
        title: { text: "$135,965", offsetX: 10, style: { fontSize: "22px" } },
        subtitle: {
            text: "Profits",
            offsetX: 10,
            offsetY: 35,
            style: { fontSize: "13px" },
        },
    },
    options =
        (new ApexCharts(document.querySelector("#spark3"), spark3).render(),
        {
            chart: {
                height: 380,
                type: "line",
                zoom: { enabled: !1 },
                toolbar: { show: !1 },
            },
            colors: (colors = ["#6658dd", "#1abc9c"]),
            dataLabels: { enabled: !0 },
            stroke: { width: [3, 3], curve: "smooth" },
            series: [
                { name: "High - 2018", data: [28, 29, 33, 36, 32, 32, 33] },
                { name: "Low - 2018", data: [12, 11, 14, 18, 17, 13, 13] },
            ],
            title: {
                text: "Average High & Low Temperature",
                align: "left",
                style: { fontSize: "14px", color: "#666" },
            },
            grid: {
                row: { colors: ["transparent", "transparent"], opacity: 0.2 },
                borderColor: "#f1f3fa",
            },
            markers: { style: "inverted", size: 6 },
            xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
                title: { text: "Month" },
            },
            yaxis: { title: { text: "Temperature" }, min: 5, max: 40 },
            legend: {
                position: "top",
                horizontalAlign: "right",
                floating: !0,
                offsetY: -25,
                offsetX: -5,
            },
            responsive: [
                {
                    breakpoint: 600,
                    options: {
                        chart: { toolbar: { show: !1 } },
                        legend: { show: !1 },
                    },
                },
            ],
        });
function generateDayWiseTimeSeries(e, t, o) {
    for (var a = 0, r = []; a < t; ) {
        var s = e,
            i = Math.floor(Math.random() * (o.max - o.min + 1)) + o.min;
        r.push([s, i]), (e += 864e5), a++;
    }
    return r;
}

(chart = new ApexCharts(
    document.querySelector("#apex-line-1"),
    options
)).render(),
    (options = {
        chart: {
            height: 380,
            type: "line",
            shadow: {
                enabled: !1,
                color: "#bbb",
                top: 3,
                left: 2,
                blur: 3,
                opacity: 1,
            },
        },
        stroke: { width: 5, curve: "smooth" },
        series: [
            {
                name: "Likes",
                data: [
                    4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7,
                    5,
                ],
            },
        ],
        xaxis: {
            type: "datetime",
            categories: [
                "1/11/2000",
                "2/11/2000",
                "3/11/2000",
                "4/11/2000",
                "5/11/2000",
                "6/11/2000",
                "7/11/2000",
                "8/11/2000",
                "9/11/2000",
                "10/11/2000",
                "11/11/2000",
                "12/11/2000",
                "1/11/2001",
                "2/11/2001",
                "3/11/2001",
                "4/11/2001",
                "5/11/2001",
                "6/11/2001",
            ],
        },
        title: {
            text: "Social Media",
            align: "left",
            style: { fontSize: "14px", color: "#666" },
        },
        fill: {
            type: "gradient",
            gradient: {
                shade: "dark",
                gradientToColors: (colors = ["#f672a7"]),
                shadeIntensity: 1,
                type: "horizontal",
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100, 100, 100],
            },
        },
        markers: {
            size: 4,
            opacity: 0.9,
            colors: ["#56c2d6"],
            strokeColor: "#fff",
            strokeWidth: 2,
            style: "inverted",
            hover: { size: 7 },
        },
        yaxis: { min: -10, max: 40, title: { text: "Engagement" } },
        grid: {
            row: { colors: ["transparent", "transparent"], opacity: 0.2 },
            borderColor: "#185a9d",
        },
        responsive: [
            {
                breakpoint: 600,
                options: {
                    chart: { toolbar: { show: !1 } },
                    legend: { show: !1 },
                },
            },
        ],
    }),
    (chart = new ApexCharts(
        document.querySelector("#apex-line-2"),
        options
    )).render(),
    (options = {
        chart: {
            height: 380,
            type: "area",
            stacked: !0,
            events: {
                selection: function (e, t) {
                    console.log(new Date(t.xaxis.min));
                },
            },
        },
        colors: (colors = ["#6658dd", "#f7b84b", "#CED4DC"]),
        dataLabels: { enabled: !1 },
        stroke: { width: [2], curve: "smooth" },
        series: [
            {
                name: "South",
                data: generateDayWiseTimeSeries(
                    new Date("11 Feb 2017 GMT").getTime(),
                    20,
                    { min: 10, max: 60 }
                ),
            },
            {
                name: "North",
                data: generateDayWiseTimeSeries(
                    new Date("11 Feb 2017 GMT").getTime(),
                    20,
                    { min: 10, max: 20 }
                ),
            },
            {
                name: "Central",
                data: generateDayWiseTimeSeries(
                    new Date("11 Feb 2017 GMT").getTime(),
                    20,
                    { min: 10, max: 15 }
                ),
            },
        ],
        fill: {
            type: "gradient",
            gradient: { opacityFrom: 0.6, opacityTo: 0.8 },
        },
        legend: { position: "top", horizontalAlign: "left" },
        xaxis: { type: "datetime" },
    }),
    (chart = new ApexCharts(
        document.querySelector("#apex-area"),
        options
    )).render(),
    (options = {
        chart: { height: 380, type: "bar", toolbar: { show: !1 } },
        plotOptions: {
            bar: { horizontal: !1, endingShape: "rounded", columnWidth: "55%" },
        },
        dataLabels: { enabled: !1 },
        stroke: { show: !0, width: 2, colors: ["transparent"] },
        colors: (colors = ["#6658dd", "#1abc9c", "#CED4DC"]),
        series: [
            { name: "Net Profit", data: [44, 55, 57, 56, 61, 58, 63, 60, 66] },
            { name: "Revenue", data: [76, 85, 101, 98, 87, 105, 91, 114, 94] },
            {
                name: "Free Cash Flow",
                data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
            },
        ],
        xaxis: {
            categories: [
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
            ],
        },
        legend: { offsetY: 5 },
        yaxis: { title: { text: "$ (thousands)" } },
        fill: { opacity: 1 },
        grid: {
            row: { colors: ["transparent", "transparent"], opacity: 0.2 },
            borderColor: "#f1f3fa",
            padding: { bottom: 10 },
        },
        tooltip: {
            y: {
                formatter: function (e) {
                    return "$ " + e + " thousands";
                },
            },
        },
    }),
    (chart = new ApexCharts(
        document.querySelector("#apex-column-1"),
        options
    )).render(),
    (options = {
        chart: { height: 380, type: "bar", toolbar: { show: !1 } },
        plotOptions: { bar: { dataLabels: { position: "top" } } },
        dataLabels: {
            enabled: !0,
            formatter: function (e) {
                return e + "%";
            },
            offsetY: -30,
            style: { fontSize: "12px", colors: ["#304758"] },
        },
        colors: (colors = ["#6658dd"]),
        series: [
            {
                name: "Inflation",
                data: [2.3, 3.1, 4, 10.1, 4, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
            },
        ],
        xaxis: {
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
            position: "top",
            labels: { offsetY: -18 },
            axisBorder: { show: !1 },
            axisTicks: { show: !1 },
            crosshairs: {
                fill: {
                    type: "gradient",
                    gradient: {
                        colorFrom: "#D8E3F0",
                        colorTo: "#BED1E6",
                        stops: [0, 100],
                        opacityFrom: 0.4,
                        opacityTo: 0.5,
                    },
                },
            },
            tooltip: { enabled: !0, offsetY: -35 },
        },
        fill: {
            gradient: {
                enabled: !1,
                shade: "light",
                type: "horizontal",
                shadeIntensity: 0.25,
                gradientToColors: void 0,
                inverseColors: !0,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [50, 0, 100, 100],
            },
        },
        yaxis: {
            axisBorder: { show: !1 },
            axisTicks: { show: !1 },
            labels: {
                show: !1,
                formatter: function (e) {
                    return e + "%";
                },
            },
        },
        title: {
            text: "Monthly Inflation in Argentina, 2002",
            floating: !0,
            offsetY: 350,
            align: "center",
            style: { color: "#444" },
        },
        grid: {
            row: { colors: ["transparent", "transparent"], opacity: 0.2 },
            borderColor: "#f1f3fa",
        },
    }),
    (chart = new ApexCharts(
        document.querySelector("#apex-column-2"),
        options
    )).render(),
    (options = {
        chart: { height: 380, type: "line" },
        stroke: { width: 2, curve: "smooth" },
        series: [
            {
                name: "TEAM A",
                type: "area",
                data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33],
            },
            {
                name: "TEAM B",
                type: "line",
                data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43],
            },
        ],
        colors: (colors = ["#CED4DC", "#6658dd"]),
        fill: { type: "solid", opacity: [0.35, 1] },
        labels: [
            "Dec 01",
            "Dec 02",
            "Dec 03",
            "Dec 04",
            "Dec 05",
            "Dec 06",
            "Dec 07",
            "Dec 08",
            "Dec 09 ",
            "Dec 10",
            "Dec 11",
        ],
        markers: { size: 0 },
        yaxis: [
            { title: { text: "Series A" } },
            { opposite: !0, title: { text: "Series B" } },
        ],
        tooltip: {
            shared: !0,
            intersect: !1,
            y: {
                formatter: function (e) {
                    return void 0 !== e ? e.toFixed(0) + " points" : e;
                },
            },
        },
        legend: { offsetY: 7 },
    }),
    (chart = new ApexCharts(
        document.querySelector("#apex-mixed-1"),
        options
    )).render(),
    (options = {
        chart: { height: 380, type: "bar", toolbar: { show: !1 } },
        plotOptions: { bar: { horizontal: !0 } },
        dataLabels: { enabled: !1 },
        series: [
            { data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380] },
        ],
        colors: (colors = ["#1abc9c"]),
        xaxis: {
            categories: [
                "South Korea",
                "Canada",
                "United Kingdom",
                "Netherlands",
                "Italy",
                "France",
                "Japan",
                "United States",
                "China",
                "Germany",
            ],
        },
        states: { hover: { filter: "none" } },
        grid: { borderColor: "#f1f3fa" },
    }),
    (chart = new ApexCharts(
        document.querySelector("#apex-bar-1"),
        options
    )).render(),
    (options = {
        chart: { height: 380, type: "bar", stacked: !0, toolbar: { show: !1 } },
        colors: (colors = ["#6658dd", "#1abc9c"]),
        plotOptions: { bar: { horizontal: !0, barHeight: "80%" } },
        dataLabels: { enabled: !1 },
        stroke: { width: 1, colors: ["#fff"] },
        series: [
            {
                name: "Males",
                data: [
                    0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3,
                    4.1, 4.2, 4.5, 3.9, 3.5, 3,
                ],
            },
            {
                name: "Females",
                data: [
                    -0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96,
                    -4.22, -4.3, -4.4, -4.1, -4, -4.1, -3.4, -3.1, -2.8,
                ],
            },
        ],
        grid: { xaxis: { showLines: !1 } },
        grid: { borderColor: "#f1f3fa" },
        yaxis: { min: -5, max: 5, title: {} },
        tooltip: {
            shared: !1,
            x: {
                formatter: function (e) {
                    return e;
                },
            },
            y: {
                formatter: function (e) {
                    return Math.abs(e) + "%";
                },
            },
        },
        xaxis: {
            categories: [
                "85+",
                "80-84",
                "75-79",
                "70-74",
                "65-69",
                "60-64",
                "55-59",
                "50-54",
                "45-49",
                "40-44",
                "35-39",
                "30-34",
                "25-29",
                "20-24",
                "15-19",
                "10-14",
                "5-9",
                "0-4",
            ],
            title: { text: "Percent" },
            labels: {
                formatter: function (e) {
                    return Math.abs(Math.round(e)) + "%";
                },
            },
        },
        legend: { offsetY: 7 },
    }),
    (chart = new ApexCharts(
        document.querySelector("#apex-bar-2"),
        options
    )).render(),
    (options = {
        chart: {
            height: 380,
            type: "line",
            padding: { right: 0, left: 0 },
            stacked: !1,
            toolbar: { show: !1 },
        },
        stroke: { width: [0, 2, 4], curve: "smooth" },
        plotOptions: { bar: { columnWidth: "50%" } },
        colors: (colors = ["#6658dd", "#1abc9c", "#f672a7"]),
        series: [
            {
                name: "Team A",
                type: "column",
                data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
            },
            {
                name: "Team B",
                type: "area",
                data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
            },
            {
                name: "Team C",
                type: "line",
                data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
            },
        ],
        fill: {
            opacity: [0.85, 0.25, 1],
            gradient: {
                inverseColors: !1,
                shade: "light",
                type: "vertical",
                opacityFrom: 0.85,
                opacityTo: 0.55,
                stops: [0, 100, 100, 100],
            },
        },
        labels: [
            "01/01/2003",
            "02/01/2003",
            "03/01/2003",
            "04/01/2003",
            "05/01/2003",
            "06/01/2003",
            "07/01/2003",
            "08/01/2003",
            "09/01/2003",
            "10/01/2003",
            "11/01/2003",
        ],
        markers: { size: 0 },
        legend: { offsetY: 7 },
        xaxis: { type: "datetime" },
        yaxis: { title: { text: "Points" } },
        tooltip: {
            shared: !0,
            intersect: !1,
            y: {
                formatter: function (e) {
                    return void 0 !== e ? e.toFixed(0) + " points" : e;
                },
            },
        },
        grid: { borderColor: "#f1f3fa", padding: { bottom: 10 } },
    }),
    (chart = new ApexCharts(
        document.querySelector("#apex-mixed-2"),
        options
    )).render(),
    (options = {
        chart: { height: 380, type: "scatter", zoom: { enabled: !1 } },
        series: [
            {
                name: "Sample A",
                data: [
                    [16.4, 5.4],
                    [21.7, 2],
                    [25.4, 3],
                    [19, 2],
                    [10.9, 1],
                    [13.6, 3.2],
                    [10.9, 7.4],
                    [10.9, 0],
                    [10.9, 8.2],
                    [16.4, 0],
                    [16.4, 1.8],
                    [13.6, 0.3],
                    [13.6, 0],
                    [29.9, 0],
                    [27.1, 2.3],
                    [16.4, 0],
                    [13.6, 3.7],
                    [10.9, 5.2],
                    [16.4, 6.5],
                    [10.9, 0],
                    [24.5, 7.1],
                    [10.9, 0],
                    [8.1, 4.7],
                    [19, 0],
                    [21.7, 1.8],
                    [27.1, 0],
                    [24.5, 0],
                    [27.1, 0],
                    [29.9, 1.5],
                    [27.1, 0.8],
                    [22.1, 2],
                ],
            },
            {
                name: "Sample B",
                data: [
                    [6.4, 13.4],
                    [1.7, 11],
                    [5.4, 8],
                    [9, 17],
                    [1.9, 4],
                    [3.6, 12.2],
                    [1.9, 14.4],
                    [1.9, 9],
                    [1.9, 13.2],
                    [1.4, 7],
                    [6.4, 8.8],
                    [3.6, 4.3],
                    [1.6, 10],
                    [9.9, 2],
                    [7.1, 15],
                    [1.4, 0],
                    [3.6, 13.7],
                    [1.9, 15.2],
                    [6.4, 16.5],
                    [0.9, 10],
                    [4.5, 17.1],
                    [10.9, 10],
                    [0.1, 14.7],
                    [9, 10],
                    [12.7, 11.8],
                    [2.1, 10],
                    [2.5, 10],
                    [27.1, 10],
                    [2.9, 11.5],
                    [7.1, 10.8],
                    [2.1, 12],
                ],
            },
            {
                name: "Sample C",
                data: [
                    [21.7, 3],
                    [23.6, 3.5],
                    [24.6, 3],
                    [29.9, 3],
                    [21.7, 20],
                    [23, 2],
                    [10.9, 3],
                    [28, 4],
                    [27.1, 0.3],
                    [16.4, 4],
                    [13.6, 0],
                    [19, 5],
                    [22.4, 3],
                    [24.5, 3],
                    [32.6, 3],
                    [27.1, 4],
                    [29.6, 6],
                    [31.6, 8],
                    [21.6, 5],
                    [20.9, 4],
                    [22.4, 0],
                    [32.6, 10.3],
                    [29.7, 20.8],
                    [24.5, 0.8],
                    [21.4, 0],
                    [21.7, 6.9],
                    [28.6, 7.7],
                    [15.4, 0],
                    [18.1, 0],
                    [33.4, 0],
                    [16.4, 0],
                ],
            },
        ],
        xaxis: { tickAmount: 10 },
        yaxis: { tickAmount: 7 },
        colors: (colors = ["#1abc9c", "#f672a7", "#6c757d"]),
        grid: { borderColor: "#f1f3fa", padding: { bottom: 10 } },
        legend: { offsetY: 7 },
        responsive: [
            {
                breakpoint: 600,
                options: {
                    chart: { toolbar: { show: !1 } },
                    legend: { show: !1 },
                },
            },
        ],
    }),
    (chart = new ApexCharts(
        document.querySelector("#apex-scatter-1"),
        options
    )).render(),
    (colors = ["#1abc9c", "#f672a7", "#6c757d", "#6658dd", "#6559cc"]),
    (options = {
        chart: { height: 380, type: "scatter", zoom: { type: "xy" } },
        series: [
            {
                name: "Team 1",
                data: generateDayWiseTimeSeries(
                    new Date("11 Feb 2017 GMT").getTime(),
                    20,
                    { min: 10, max: 60 }
                ),
            },
            {
                name: "Team 2",
                data: generateDayWiseTimeSeries(
                    new Date("11 Feb 2017 GMT").getTime(),
                    20,
                    { min: 10, max: 60 }
                ),
            },
            {
                name: "Team 3",
                data: generateDayWiseTimeSeries(
                    new Date("11 Feb 2017 GMT").getTime(),
                    30,
                    { min: 10, max: 60 }
                ),
            },
            {
                name: "Team 4",
                data: generateDayWiseTimeSeries(
                    new Date("11 Feb 2017 GMT").getTime(),
                    10,
                    { min: 10, max: 60 }
                ),
            },
            {
                name: "Team 5",
                data: generateDayWiseTimeSeries(
                    new Date("11 Feb 2017 GMT").getTime(),
                    30,
                    { min: 10, max: 60 }
                ),
            },
        ],
        dataLabels: { enabled: !1 },
        colors: colors,
        grid: {
            borderColor: "#f1f3fa",
            xaxis: { showLines: !0 },
            yaxis: { showLines: !0 },
            padding: { bottom: 10 },
        },
        legend: { offsetY: 7 },
        xaxis: { type: "datetime" },
        yaxis: { max: 70 },
        responsive: [
            {
                breakpoint: 600,
                options: {
                    chart: { toolbar: { show: !1 } },
                    legend: { show: !1 },
                },
            },
        ],
    }),
    (chart = new ApexCharts(
        document.querySelector("#apex-scatter-2"),
        options
    )).render();
var options = {
        chart: { height: 400, type: "candlestick" },
        plotOptions: {
            candlestick: {
                colors: {
                    upward: (colors = ["#6658dd", "#1abc9c"])[0],
                    downward: colors[1],
                },
            },
        },
        series: [{ data: seriesData }],
        stroke: { show: !0, colors: "#f1f3fa", width: [1, 4] },
        xaxis: { type: "datetime" },
        grid: { borderColor: "#f1f3fa" },
    },
    colors =
        ((chart = new ApexCharts(
            document.querySelector("#apex-candlestick-1"),
            options
        )).render(),
        ["#6658dd", "#f7b84b"]),
    optionsCandlestick = {
        chart: {
            height: 240,
            type: "candlestick",
            toolbar: { show: !1 },
            zoom: { enabled: !1 },
        },
        series: [{ data: seriesData }],
        plotOptions: {
            candlestick: { colors: { upward: colors[0], downward: colors[1] } },
        },
        xaxis: { type: "datetime" },
        grid: { borderColor: "#f1f3fa" },
    },
    chartCandlestick = new ApexCharts(
        document.querySelector("#apex-candlestick-2"),
        optionsCandlestick
    ),
    colors = (chartCandlestick.render(), ["#f45454", "#37cde6"]),
    options = {
        chart: {
            height: 160,
            type: "bar",
            toolbar: { show: !1, autoSelected: "selection" },
            selection: {
                xaxis: {
                    min: new Date("20 Jan 2017").getTime(),
                    max: new Date("10 Dec 2017").getTime(),
                },
                fill: { color: "#6c757d", opacity: 0.4 },
                stroke: { color: "#6c757d" },
            },
            events: {
                selection: function (e, t) {
                    chartCandlestick.updateOptions(
                        { xaxis: { min: t.xaxis.min, max: t.xaxis.max } },
                        !1,
                        !1
                    );
                },
            },
        },
        dataLabels: { enabled: !1 },
        plotOptions: {
            bar: {
                columnWidth: "80%",
                colors: {
                    ranges: [
                        { from: -1e3, to: 0, color: colors[0] },
                        { from: 1, to: 1e4, color: colors[1] },
                    ],
                },
            },
        },
        series: [{ name: "volume", data: seriesDataLinear }],
        xaxis: { type: "datetime", axisBorder: { offsetX: 13 } },
        yaxis: { labels: { show: !1 } },
        grid: { borderColor: "#f1f3fa" },
    };
(chart = new ApexCharts(
    document.querySelector("#apex-candlestick-3"),
    options
)).render(),
    (options = {
        chart: { height: 320, type: "pie" },
        series: [44, 55, 41, 17, 15],
        labels: ["Series 1", "Series 2", "Series 3", "Series 4", "Series 5"],
        colors: (colors = [
            "#6658dd",
            "#4fc6e1",
            "#4a81d4",
            "#00b19d",
            "#f1556c",
        ]),
        legend: {
            show: !0,
            position: "bottom",
            horizontalAlign: "center",
            verticalAlign: "middle",
            floating: !1,
            fontSize: "14px",
            offsetX: 0,
            offsetY: 7,
        },
        responsive: [
            {
                breakpoint: 600,
                options: { chart: { height: 240 }, legend: { show: !1 } },
            },
        ],
    }),
    (chart = new ApexCharts(
        document.querySelector("#apex-pie-1"),
        options
    )).render(),
    (options = {
        chart: { height: 320, type: "donut" },
        series: [44, 55, 41, 17, 15],
        legend: {
            show: !0,
            position: "bottom",
            horizontalAlign: "center",
            verticalAlign: "middle",
            floating: !1,
            fontSize: "14px",
            offsetX: 0,
            offsetY: 7,
        },
        labels: ["Series 1", "Series 2", "Series 3", "Series 4", "Series 5"],
        colors: (colors = [
            "#6658dd",
            "#4fc6e1",
            "#4a81d4",
            "#00b19d",
            "#f1556c",
        ]),
        responsive: [
            {
                breakpoint: 600,
                options: { chart: { height: 240 }, legend: { show: !1 } },
            },
        ],
        fill: { type: "gradient" },
    }),
    (chart = new ApexCharts(
        document.querySelector("#apex-pie-2"),
        options
    )).render(),
    (options = {
        chart: {
            height: 320,
            type: "donut",
            dropShadow: {
                enabled: !0,
                color: "#111",
                top: -1,
                left: 3,
                blur: 3,
                opacity: 0.2,
            },
        },
        stroke: { show: !0, width: 2 },
        series: [44, 55, 41, 17, 15],
        colors: (colors = [
            "#6658dd",
            "#4fc6e1",
            "#4a81d4",
            "#00b19d",
            "#f1556c",
        ]),
        labels: ["Comedy", "Action", "SciFi", "Drama", "Horror"],
        dataLabels: { dropShadow: { blur: 3, opacity: 0.8 } },
        fill: {
            type: "pattern",
            opacity: 1,
            pattern: {
                enabled: !0,
                style: [
                    "verticalLines",
                    "squares",
                    "horizontalLines",
                    "circles",
                    "slantedLines",
                ],
            },
        },
        states: { hover: { enabled: !1 } },
        legend: {
            show: !0,
            position: "bottom",
            horizontalAlign: "center",
            verticalAlign: "middle",
            floating: !1,
            fontSize: "14px",
            offsetX: 0,
            offsetY: 7,
        },
        responsive: [
            {
                breakpoint: 600,
                options: { chart: { height: 240 }, legend: { show: !1 } },
            },
        ],
    }),
    (chart = new ApexCharts(
        document.querySelector("#apex-pie-3"),
        options
    )).render(),
    (colors = ["#6c757d"]),
    (options = {
        chart: { height: 350, type: "radialBar" },
        plotOptions: { radialBar: { hollow: { size: "70%" } } },
        colors: ["#6c757d"],
        series: [70],
        labels: ["CRICKET"],
    }),
    (chart = new ApexCharts(
        document.querySelector("#apex-radialbar-1"),
        options
    )).render(),
    (options = {
        chart: { height: 350, type: "radialBar" },
        plotOptions: {
            radialBar: {
                dataLabels: {
                    name: { fontSize: "22px" },
                    value: { fontSize: "16px" },
                    total: {
                        show: !0,
                        label: "Total",
                        formatter: function (e) {
                            return 249;
                        },
                    },
                },
            },
        },
        colors: (colors = ["#6658dd", "#e36498", "#23b397", "#f7b84b"]),
        series: [44, 55, 67, 83],
        labels: ["Apples", "Oranges", "Bananas", "Berries"],
    }),
    (chart = new ApexCharts(
        document.querySelector("#apex-radialbar-2"),
        options
    )).render();
var chart,
    options = {
        chart: { height: 375, type: "radialBar" },
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 135,
                dataLabels: {
                    name: { fontSize: "16px", color: void 0, offsetY: 120 },
                    value: {
                        offsetY: 76,
                        fontSize: "22px",
                        color: void 0,
                        formatter: function (e) {
                            return e + "%";
                        },
                    },
                },
            },
        },
        fill: {
            gradient: {
                enabled: !0,
                shade: "dark",
                shadeIntensity: 0.15,
                inverseColors: !1,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 65, 91],
            },
        },
        stroke: { dashArray: 4 },
        colors: (colors = ["#f1556c"]),
        series: [67],
        labels: ["Median Ratio"],
        responsive: [{ breakpoint: 380, options: { chart: { height: 280 } } }],
    };
(chart = new ApexCharts(
    document.querySelector("#apex-radialbar-3"),
    options
)).render();
