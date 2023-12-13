import { MinimalRepository } from "./gitapi/types";
import Card from "./card";
import { GetUserRepo, GetUserPins } from './gitapi/queries';
import { sort, filter } from './gitapi/utils';

export default async function CardList() {
    let x = await GetUserRepo("hugolz");
    for (let index in x){
      // console.log(x[index].name);
    }
    
    let y = await GetUserRepo("bowarc");
    for (let index in y){
      // console.log(y[index].name);
    }

    let data:Array<MinimalRepository> = sort(filter(x.concat(y)));

    console.log(typeof(data)); 
    // console.log(repo1);
    let renders: Array<Element> = new Array();

    for (let i in data){
        // console.log(data[i].name)
        renders.push(
            <Card data={data[i]} />
        )
    }

    return (
        <div className="project_list">
            {renders}
        </div>
    ); 
}
