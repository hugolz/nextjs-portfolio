import { MinimalRepository } from "./gitapi/types";
import { get_last_update_time } from "./gitapi/utils";
import capitalizeFirstLetter from "./utils";
import Image from "next/image";
import Link from "next/link";

export default function Card(_data: { data: MinimalRepository }) {
    let data: MinimalRepository = _data.data;
    console.log(data);

    // let name: string = repo.name;
    // let formatted_name = capitalizeFirstLetter(name);
    let last_update_time = get_last_update_time(data);

    return (
        <div className="">
        <Link href={`https://github.com/${data.owner.login}/${data.name}`} className="card-link mb-2"><div className="card-bg"></div>
            <div className="card-title">
                <Image src={`/${data.language.toLowerCase()}.webp`} alt={`${data.language} icon`} className="icon" width="25" height="25" />
                {capitalizeFirstLetter(data.name.replace("_", " "))} 
            </div>
            <div className="card-description">{data.description}</div>
            <div className="card-date-box ">
                Last update:
                <span className="card-date">
                {last_update_time.toLocaleDateString("fr-FR")} {last_update_time.getHours()}h{last_update_time.getMinutes()}
                </span>
            </div>
        </Link>
        </div>
    );
}
