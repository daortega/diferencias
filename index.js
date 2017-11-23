$('.chart').segbar([
    {
        data: [
            { title: '16_Evacuate', value: 1,  color: '#c7fe36' },
            { title: '17_Evacuate_fast', value: 217, color: '#36c7fe' },
            { title: 'Repetidas', value: 0, color: '#6d36feE' },
            { title: 'N.A', value: 13, color: '#EB974E' }
        ]
    },
    {
        data: [
            { title: '27_Geo_point', value: 123},
            { title: '06_Assembly_family', value: 51},
            { title: '05_Assembly_group', value: 52 },
            { title: 'Repetidas', value: 8 },
            { title: 'N.A', value: 13 }
        ]
    },
    {
        data: [
            { title: 'Triangulo-amarillo', value: 104 },
            { title: 'Octagono-rojo', value: 116, color: '#fe6d36' },
            { title: 'Repetidas', value: 4, color: '#6d36fe' },
            { title: 'N.A', value: 15 },
        ]
    }
]).addClass('mb-5');

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
