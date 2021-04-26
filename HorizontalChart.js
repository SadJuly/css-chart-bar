class HorizontalChart {
    constructor({
        height,
        width,
        title,
        data,
        color,
        dataLabel
    }) {
        this.color = color
        this.height = height
        this.width = width
        this.title = title
        this.data = data
        this.dataLabel = dataLabel
    }

    render(toElement) {

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
            if(this.color){
                barElement.style.background = this.color
            }
            barElement.setAttribute('bar-value', value)
            barElement.setAttribute('from-label', key)

            let dataLabel = document.createElement('span')
            dataLabel.classList = 'data-label'
            dataLabel.setAttribute('from-label', key)
            if(this.dataLabel){
                if(this.dataLabel.color){
                    dataLabel.style.color = this.dataLabel.color
                }
            }
            dataLabel.innerText = value

            barElement.appendChild(dataLabel)

            barLabels.append(labelElement)
            chartBars.append(barElement)

        })

        chartContainer.append(barLabels, chartBars)
        rootChart.append(chartTitle, chartContainer)
        if(toElement){
            document.querySelector(toElement).innerHTML = rootChart.outerHTML
        }else{
            return rootChart.outerHTML
        }
    }
}
