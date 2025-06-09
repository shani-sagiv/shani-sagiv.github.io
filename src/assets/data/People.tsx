import {createDate} from "helpers/dateHelpers";

interface dates {
  from: Date;
  to: Date;
}
interface peopleTraveledWith{
    people:people,
    dates: dates[];
    
}

interface people {
    name:string
}


const MIKA:people = {
    name:"מיקה"
}
const ROTEM:people = {
    name:"רותם"
}

export const PEOPLE_TRAVELED_WITH:peopleTraveledWith[] = [
    {
        people:ROTEM,
        dates: [{ from: createDate("23/08/2024"), to: createDate("29/08/2024") }],
    }
]
