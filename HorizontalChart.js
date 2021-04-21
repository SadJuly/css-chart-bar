class HorizontalChart {
    constructor({
        element,
        height,
        width,
        title,
        data
    }) {
        this.element = element
        this.height = height
        this.width = width
        this.title = title
        this.data = data
    }

    render() {

        let element = document.querySelector(this.element)

        let rootChart = document.createElement('div')
        rootChart.className = 'root-chart'
        rootChart.style.height = this.height
        rootChart.style.width = this.width

        let chartTitle = document.createElement('div')
        chartTitle.className = 'chart-title'
        chartTitle.innerText = this.title

        let chartContainer = document.createElement('div')
        chartContainer.className = 'chart-container'

        let barLabels = document.createElement('div')
        barLabels.className = 'bar-labels'

        let chartBars = document.createElement('div')
        chartBars.className = 'chart-bars'

        

        Object.entries(this.data).forEach(([key, value]) => {

            console.log({key,value})

            let labelElement = document.createElement('div')
            labelElement.className = 'bar-label'
            labelElement.innerHTML = `<span>${key}</span>`

            let barElement = document.createElement('div')
            barElement.className = 'chart-bar'
            barElement.style.width = value + '%'
            barElement.setAttribute('bar-value', value)
            barElement.setAttribute('from-label', key)

            let dataLabel = document.createElement('span')
            dataLabel.classList = 'data-label'
            dataLabel.setAttribute('from-label', key)
            dataLabel.innerText = value

            barElement.appendChild(dataLabel)

            barLabels.append(labelElement)
            chartBars.append(barElement)

        })

        chartContainer.append(barLabels, chartBars)
        rootChart.append(chartTitle, chartContainer)

        element.innerHTML = rootChart.outerHTML

    }
}
