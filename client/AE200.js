
//This function is the result of using highcharts' API to get a relatively accurate view of Amos Eaton 200 for our testing and debugging purposes.

$(function () {

    // Initiate the chart
    $('#container').highcharts('Map', {
        
		title : {
			text: 'Amos Eaton 200'
		},
		series: [
	{
		
		"events": {
                        click: function (e) {
                            var text = '<b>Clicked</b><br>Series: ' + this.color + 
                                    '<br>Point: ' + e.point.name;
                            if (!this.chart.clickLabel) {
                                this.chart.clickLabel = this.chart.renderer.label(text, 0, 0)
                                    .css({
                                        width: '180px'
                                    })
                                    .add();
                            } else {
                                this.chart.clickLabel.attr({
                                    text: text
                                });
                            }
                        }
                },
		"type": "map",
		"data": [

			{
				"name": "Amos Eaton 203",
				"path": "M107,-938,107,-870,165,-869,165,-937z",
				"color": "blue"				
			},
			{
				"name": "Amos Eaton 204",
				"path": "M175,-936,175,-870,314,-869,314,-935z",
				"color": "black"
			},
			{
				"name": "Amos Eaton 214",
				"path": "M174,-830,430,-831,433,-631,174,-631z",
				"color": "green"
			},
			{
				"name": "Amos Eaton 215",
				"path": "M435,-829,437,-633,591,-632,591,-829z",
				"color": "green"
			},
			{
				"name": "Amos Eaton 216",
				"path": "M595,-833,710,-833,710,-815,724,-815,724,-633,592,-633,590,-832z",
				"color": "green"
			},
			{
				"name": "Amos Eaton 205",
				"path": "M371,-868,370,-935,315,-935,315,-868z",
				"color": "black"
			},
			{
				"name": "Amos Eaton 206",
				"path": "M373,-935,372,-870,425,-869,424,-935z",
				"color": "black"
			},
			{
				"name": "Amos Eaton 207",
				"path": "M427,-934,428,-870,497,-870,497,-935z",
				"color": "black"
			},
			{
				"name": "Amos Eaton 208",
				"path": "M500,-936,499,-871,552,-871,552,-935z",
				"color": "black"
			},
			{
				"name": "Amos Eaton 209",
				"path": "M555,-934,554,-870,606,-870,606,-935z",
				"color": "black"
			},
			{
				"name": "Amos Eaton 210",
				"path": "M606,-937,664,-936,664,-868,608,-869z",
				"color": "black"
			},
			{
				"name": "Amos Eaton 211",
				"path": "M664,-935,722,-935,724,-869,666,-869z",
				"color": "black"
			},
			{
				"name": "Amos Eaton 219",
				"path": "M750,-890,751,-876,757,-876,758,-853,842,-854,841,-889z",
				"color": "black"
			},
			{
				"name": "Amos Eaton 218",
				"path": "M754,-852,840,-852,840,-815,755,-817z",
				"color": "black"
			},
			{
				"name": "Amos Eaton 217",
				"path": "M730,-814,730,-632,751,-632,753,-626,840,-625,842,-813z",
				"color": "black"
			},
			{
				"name": "Amos Eaton 212",
				"path": "M729,-937,729,-892,840,-892,842,-942,753,-942,752,-937z",
				"color": "yellow"
			},
			{
				"name": "Amos Eaton 201",
				"path": "M106,-761,108,-626,171,-627,171,-759z",
				"color": "yellow"
			}
		]
	},
	{
		"type": "mapline",
		"data": [
			{
				"name": "Amos Eaton 2",
				"path": "M99,-955,99,-898,89,-899,90,-668,97,-667,97,-614,849,-617,849,-951z"
			}
		]
	}
]
    });
});