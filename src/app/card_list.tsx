import { MinimalRepository } from "./api/git/types";
import Card from "./card";
import { GetUserRepo, GetUserPins } from './api/git/queries';
import { sort, filter } from './api/git/utils';

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
        <div className="text-[var(--text-primary)] p-[1%] sm:ml-[25%] sm:mr-[25%] ml-[5%] mr-[5%] sm:w-[50%] h-[100%]">
            {renders}
        </div>
    ); 
}
