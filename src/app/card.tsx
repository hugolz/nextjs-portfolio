import { MinimalRepository } from "./api/git/types";
import { get_last_update_time } from "./api/git/utils";
import { capitalizeFirstLetter } from "./utils";
import Image from "next/image";
import Link from "next/link";

export default function Card(_data: { data: MinimalRepository }) {
    let data: MinimalRepository = _data.data;
    // console.log(data);

    // let name: string = repo.name;
    // let formatted_name = capitalizeFirstLetter(name);
    let last_update_time = get_last_update_time(data);

    return (
        <div className="project card">
        <Link href={`https://github.com/${data.owner.login}/${data.name}`} className="card-link block pr-[3%] pl-[2%] bg-[var(--background-secondary)] overflow-hidden relative mb-2 rounded-[28px]">
        <div className="card-bg h-[128px] w-[128px] bg-[#22D7B330] absolute -top-[75px] -right-[75px] rounded-full"></div>
            <div className="text-[190%] flex justify-start">
                <Image src={`/${data.language.toLowerCase()}.webp`} alt={`${data.language}\nicon`} className="w-[25px] h-[25px] mt-[10px] absolute text-white text-[40%]" width="25" height="25" />
                <div className="justify-center m-auto">
                    <label className="">{capitalizeFirstLetter(data.name.replace("_", " "))}</label>
                </div>

            </div>
            <div className="mb-[10px] text-[var(--text-secondary)]">{data.description}</div>
            <div className="text-[18px] text-[var(--text-secondary)] mb-[3%]">
                <label>Last update:  </label>  
                <span className="font-bold text-[var(--text-accent)]">
                {last_update_time.toLocaleDateString("fr-FR")} {last_update_time.getHours()}h{last_update_time.getMinutes()}
                </span>
            </div>
        </Link>
        </div>
    );
}
