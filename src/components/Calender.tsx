
function Calendar() {
  const staff = [
    {
      img: "https://img.freepik.com/free-photo/half-profile-image-handsome-young-caucasian-man-with-good-skin-brown-eyes-black-stylish-hair-stubble-posing-isolated-against-blank-wall-looking-front-him-smiling_343059-4560.jpg",
      fullName: "Mary"
    },
    {
      img: "https://img.fixthephoto.com/blog/images/gallery/news_preview_mob_image__preview_11368.png",
      fullName: "John"
    },
    {
      img: "https://t3.ftcdn.net/jpg/06/07/84/82/240_F_607848231_w5iFN4tMmtI2woJjMh7Q8mGvgARnzHgQ.jpg",
      fullName: "Miranda"
    },
    {
      img: "https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg=",
      fullName: "David"
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwme89cM8YZvHcybGrZl_Obd9U9p5QabozJQ&s",
      fullName: "Sara"
    }
  ];

  const hours = Array.from({ length: 13 }, (_, i) => `${i + 8}:00`); // ['08:00', '09:00', ..., '20:00']

  const events = [
    { start: '09:00', end: '10:00', staff: 'Mary', title: 'Meeting', color: 'bg-blue-300' },
    { start: '12:00', end: '13:00', staff: 'John', title: 'Conference', color: 'bg-green-300' },
    // More events can be added here
  ];

  const getEventStyle = (start:any, end:any) => {
    const startHour = parseInt(start.split(':')[0]);
    const endHour = parseInt(end.split(':')[0]);
    const top = (startHour - 8) * 4; // Each hour slot has a height of 4rem
    const height = (endHour - startHour) * 4;

    return { top: `${top}rem`, height: `${height}rem` };
  };

  return (
    <div>
      <h1 className="text-lg mb-3">Calendar</h1>
      <div className="flex mb-3">
        <div className="w-10"></div>
        <div className="grid grid-cols-5 flex-grow">
          {staff.map(el => (
            <div key={el.fullName} className="flex flex-col items-center text-sm font-ubuntu font-medium gap-1">
              <img className="w-16 h-16 rounded-full" src={el.img} alt={el.fullName} />
              <h2><i>{el.fullName}</i></h2>
            </div>
          ))}
        </div>
      </div>
      <div className="flex">
       <div className="w-10"></div>
       <div className="grid grid-cols-5 flex-grow">
        {
          staff.map((_,index) => (
            <div className={`h-5  border-l-2 w-full ${staff.length-1 === index && 'border-r-2'}`}></div>
          ))
        }
       </div>
      </div>
      <div className="flex">
        <div className="flex flex-col w-10">
          {hours.map((hour) => (
            <div key={hour} className={`relative h-16`}>
              <span className="absolute font-bold right-1 -top-2 text-xs">{hour}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-5 flex-grow">
          {staff.map((el,index) => (
            <div key={el.fullName} className={`relative border-l-2 ${index == staff.length-1 && 'border-r-2'}`}>
              {hours.map((hour,index) => (
                <div key={hour} className={`h-16 border-t-2 ${index == hours.length-1 && 'border-b-2'}`}></div>
              ))}
              {events
                .filter(event => event.staff === el.fullName)
                .map(event => (
                  <div 
                    key={event.title} 
                    className={`absolute text-black font-medium text-xs w-full rounded-lg p-1 ${event.color}`} 
                    style={getEventStyle(event.start, event.end)}
                  >
                    <div>{event.start + "-" + event.end}</div>
                    <div className="font-bold">Brenda Massey</div>
                    <div>Blow Dry</div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
