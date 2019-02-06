const getSleepHours = day => {
  day = day.toLowerCase();
  switch(day){
    case 'sunday':
      return 8;
      break;
    case 'monday':
      return 7;
      break;
    case 'tuesday':
      return 5;
      break;
    case 'wednesday':
      return 4;
      break;
    case 'thursday':
      return 3;
      break;
    case 'friday':
      return 8;
      break;
    case 'saturday':
      return 1;
      break;
  }
}

const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');

const getIdealSleepHours = idealHours => idealHours * 7;

const calculateSleepDebt = idealHours => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(idealHours);
  if(actualSleepHours === idealSleepHours){
    console.log('The user got the perfect amount of sleep.');
  }else if(actualSleepHours < idealSleepHours){
   	const totalSleep = idealSleepHours - actualSleepHours;
    console.log(`The user needs ${totalSleep} more hours of sleep.`);
  }else{
    const totalSleep = actualSleepHours - idealSleepHours;
    console.log(`The user got ${totalSleep} hours more sleep than needed.`);
   }
}



calculateSleepDebt(5);
