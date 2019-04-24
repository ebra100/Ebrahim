export class timeAndDate{

    static getTimeAndDate() {
        
        let timeAndDateObject={transferTime: "" , tranferDate:""};
        let dateArray = [];
        let buffer;
        let time = Date();
        buffer = time.split(' ');
        time = buffer[4];

        for (let index = 0; index <= 2; index++) 
          dateArray[index] = buffer[index + 1];

        let date= dateArray.join(" ");
        timeAndDateObject.transferTime=time;
        timeAndDateObject.tranferDate=date;
        
        return timeAndDateObject;
    };
}
