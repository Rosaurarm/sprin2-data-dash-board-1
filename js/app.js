/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
// para  el evento  onchange
var data = console.log(data)






// definiendo  las  sedes
var sede= [
{name: "Arequipa",
  key:"AQP"},
{name: "Ciudad de  Mexico",
 key:"CDMX"},
{name: "Lima",
  key: "LIM"},
{name:"Santiago de  Chile",
  key: "SCL"
]


console.log(sede[i]);
// cantidad de estudiantes por  sedes  y  generacion.
function getGeneration (){
  for  var i=0; i<sede.length; i++){
    keys=Object.keys(data[city[i].key]);
    sede[i].generation= keys.length;
    //total  de  genraciones
    sede[i].generations = keys;
  }
}


getGeneration();
var cero = 0;

var defaultCity= sede[cero].key;
var defaultGeneration = sede[sede].generations[cero];

//estudiantes x  sede y generacion

function students(data,  city=defaultCity, generation=defaultGeneration);
return  data[city][generation].students;
}



//  total estudiantes

function   totalStudents (students){
  return   students.length;
}


//  desercion de estudiantes
function getOutStudents(students){
  var totalOuts = 0;
  var StudentsLength= totalStudents(students);
  for (var i=0; i<StudentsLength; i++) {
    var students = students[i];
    if (!student.active){
      totalOuts ++;
    }
  }
  return totalOuts;
}

//porcentaje de desercion
function percentStudentOut(totalStudents, totalOuts){
  return (totalOuts/totalStudents * 100).toFixed(1);
}

//estudiantes  activas toTAL
function studentsCurrentActive(totalStudents, totalOuts){
  return totalStudents - totalOuts;

}

function enrollment(data,  city=defaultCity, generation=defaultGeneration){
  var objectEnrollment ={};
  var students = students(data, city, generation);
  var totalStudents = totalStudents(students);
  var totalouts = getOutStudents(students);

  objectEnrollment.studentsCurrent = studentsCurrentActive(totalStudents, totalOuts);
  objectEnrollment.studentsOut = percentStudentOut(totalStudents, totalOuts);
}


//obtener promedio de HSE y TECH por   sede y generacion
var studentSedeGeneration  = data[city][generation]["students"];
for(var i = 0; i < studentsNum.length; i++){
    var totalH=0;
    var totalT =0;
    if (studentSedeGeneration[i].active === true){  //considera la  suma de  estudiantes activas
        for (var j = 0; j < studentsNum[i]["sprints"].length; j++) {
          if   ( totalH += studentsNum[i]["sprints"][j]["score"]["hse"]){
            return totalH;
          } else if { (totalT += studentsNum[i]["sprints"][j]["score"]["tech"])
          return totalT;

        }
      }
        var promTotalH = totalH / studentSedeGeneration[i]["sprints"].length;
        var promTotalT = totalT / studentSedeGeneration[i]["sprints"].length;
        //totalGenSedeT += promTotalT;
        //totalGenSedeH += promTotalH;
        console.log("INDIVIDUAL"+ promTotalH);
        console.log("INDI"+promTotalT);
        //console.log(totalGenSedeT);
        //console.log(totalGenSedeH);
    }
}
//console.log("PROMEDIO TECH" + promTotalGenT);
//console.log("PROMEDIO HSE"+  promTotalGenH);
// funciòn  para  sacar  el porcentaje de las persona  que  superan promedio.

function studentsExceed (city,generation){
  var array = [];
  var sum = 0;
  var ratings = data[city][generation].ratings;
  for (var k = 0 ; k < ratings.length; i++) {
  array.push(ratings[i].student.supera);
  }
  for (var l = 0 ; l < array.length;j++) {
  sum += array[j];
  }

}
