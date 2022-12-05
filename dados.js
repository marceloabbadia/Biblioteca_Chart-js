

let bar = new Chart (document.getElementById("barras"),{
    type:"bar",
    data:{
        labels: ['palio', 'uno', 'gol', 'up', 'corsa', 'onix'],
        datasets:[
            
            {

            label:"Vendidos no mês",
            data:[10,25,36,55,41,10,12,25,66],

        

            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                
              ],
              borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
              ],
              borderWidth: 2
    
        }]
    },
    options: {
        responsive: true,
        pluggins: {
            legend: {
                position: 'top'  
            },
            title: {
                display: true,
                text: 'Vendas de veículos'
               
            }
        }
    }

});



