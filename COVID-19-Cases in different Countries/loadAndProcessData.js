import { csv, range, timeParse } from 'd3';

const parseYear = timeParse('%Y');

const allCaps = str => str === str.toUpperCase();
const isRegion = name => allCaps(name) && name !== 'WORLD';

const melt = (unData, minYear, maxYear) => {
  const years = range(minYear, maxYear + 1);

  const data = [];

  unData.forEach(d => {
    const name = d['Region, subregion, country or area *']
      .replace('AND THE', '&');
    years.forEach(year => {
      const population = +d[year].replace(/ /g, '') * 1000;
      const row = {
        year: parseYear(year),
        name,
        population
      };
      data.push(row);
    });
  });
	console.log(data);
  return data.filter(d => isRegion(d.name));
};

export const loadAndProcessData = () => 
  Promise
    .all([
      csv('https://vizhub.com/curran/datasets/un-population-estimates-2017-medium-variant.csv'),
      csv('https://vizhub.com/curran/datasets/un-population-estimates-2017.csv'),
      csv('data01.csv'),
      csv('data02.csv')
    ])
    .then(([unDataMediumVariant, unDataEstimates,data01,data02]) => {
	      /**		
      var data01Frist = [];
      data01.forEach(d => {  // 去除多余的省份,和死亡为0 的数据
       	if( !(d['RegionCode']) && (d['Confirmed'] != 0) ){
          data01Frist.push(d);
        }
      })
      var list = {
       	name: '',
        day: '',
        deaths: '',
        confirmed: '',
      }
      // Italy China Spain Iran France United States of America United Kingdom
      var data02Second = [];

      function r(data, country){
        	var count =0,list,dataSet = [];
          
          data.forEach(d =>{
            if(d['CountryName'] == country){
							
               list = {
                name: country,
                day: count,
                deaths: d['Deaths'],
                confirmed: d['Confirmed']
              }
              dataSet.push(list);
              ++count;
            }
          })
        
        	return dataSet;
      }
      var wantCountry = ['Italy', 'China', 'Spain' ,'Iran' ,'France' ,'United States of America' ,'United Kingdom'];
      
      var t;
      for(var i =0;i<wantCountry.length;i++){
        t = r(data01Frist,wantCountry[i]);
        data02Second.push(t);
      }

      console.log(data02Second);

      console.log(data02Second[0][0].name+','+data02Second[0][0].day+','+data02Second[0][0].deaths+'\n');

        var i,j,str = '';
        var d= data02Second;
        for(i=0;i<d.length;i++){
          str += d[i][0].name+',0,0'+'\n';
          for(j=0;j<d[i].length;j++){
         		str += d[i][j].name+','+(d[i][j].day+1)+','+d[i][j].confirmed+'\n'; 
          }
        }
      console.log(str);
			**/
      
      data02.forEach(d => {
        d.day = +d.day;
        d.Confirmed = +d.Confirmed;
      })

      
      
			return data02;
  //    return melt(unDataEstimates, 1950, 2014)
  //      .concat(melt(unDataMediumVa