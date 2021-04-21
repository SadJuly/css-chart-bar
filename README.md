![](https://raw.githubusercontent.com/efivehatko/css-chart-bar/main/example_horizontal.png)

#### Example code

```javascript
    let options = {
        element: '#chart-test',
        title: 'Example Horizontal Bar',
        height: '400px',
        width: '500px',
        color: 'cornflowerblue',
        dataLabel: {
            color: 'white'
        },
        data: {
            'Label One': 100,
            'Label Two': 30,
            'Label Three': 20,
            'Label Four': 40,
            'Label Five': 10,
            'Pretty long last label': 50 
        }
    }
    let testChart = new HorizontalChart(options).render()
```
