
const options = {
  series: [
    {
      name: "cambio",
      data: [
        {
          x: new Date("2018-02-12").getTime(),
          y: 5.18,
        },
        {
          x: new Date("2018-02-13").getTime(),
          y: 5.3,
        },
        {
          x: new Date("2018-02-14").getTime(),
          y: 5.18,
        },
        {
          x: new Date("2018-02-15").getTime(),
          y: 5.11,
        },
        {
          x: new Date("2018-02-16").getTime(),
          y: 5.18,
        },
        {
          x: new Date("2018-02-17").getTime(),
          y: 5.25,
        },
        {
          x: new Date("2018-02-18").getTime(),
          y: 5.18,
        },
        {
          x: new Date("2018-02-19").getTime(),
          y: 5.2,
        },
      ],
    },
  ],
  chart: {
    height: 350,
    type: "area",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
  },
  yaxis: {
    min: 5,
    tickAmount: 4,
    labels: {
      formatter: (value) => {
        return value.toFixed(1).replace('.', ',')
      },
    },
  },
  xaxis: {
    labels: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
    axisTicks: {
      show: false,
    },
  },
  fill: {
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 90, 100],
    },
  },
  colors: ["#7C3AED"],
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      return `<div class="tooltip">
    <span>${String(series[seriesIndex][dataPointIndex]).replace('.', ',')}</span>
    <span>${new Date(
        w.globals.seriesX[seriesIndex][dataPointIndex]
      ).toLocaleDateString("pt-BR", {
        weekday: "short",
        month: "short",
        day: "numeric",
      })}</span>
    </div>`
    },
  },
}


const chart = new ApexCharts(document.querySelector("#chart"), options)
chart.render()

const inputOne = document.querySelector("#input-one").addEventListener('input', (e) => {
  document.querySelector("#input-two").value = e.target.value * 4.94.toFixed(2)

})

function handleChangeFlag1() {
  const moneyWrapper = document.querySelector('.money-wrapper'),
    optionsFlag = moneyWrapper.querySelectorAll('.option')


  optionsFlag.forEach(option => {
    option.addEventListener("click", () => {
      const selectedOption = option.querySelector('.option-li').innerHTML

      if (selectedOption.includes('USD')) {
        const inputOne = document.querySelector("#input-one").addEventListener('input', (e) => {
          document.querySelector("#input-two").value = e.target.value * 4.94.toFixed(2)

        })
      }
      if (selectedOption.includes('EUA')) {
        const inputOne = document.querySelector("#input-one").addEventListener('input', (e) => {
          document.querySelector("#input-two").value = e.target.value * 5.40.toFixed(2)
        })
      }
      if (selectedOption.includes('GBP')) {
        const inputOne = document.querySelector("#input-one").addEventListener('input', (e) => {
          document.querySelector("#input-two").value = e.target.value * 6.19.toFixed(2)
        })
      }
      const selected = document.querySelector('.selected').innerHTML = selectedOption
    })
  })
}

function handleChangeFlag2() {
  const moneyWrapper = document.querySelector('.wrapper-two'),
    optionsFlag = moneyWrapper.querySelectorAll('.option-two')


  optionsFlag.forEach(option => {
    option.addEventListener("click", () => {
      const selectedOption = option.querySelector('.option-li-two').innerHTML


      //console.log(selectedOption)
      const selected = document.querySelector('.selected-two').innerHTML = selectedOption
    })
  })
}

handleChangeFlag1()
handleChangeFlag2()





