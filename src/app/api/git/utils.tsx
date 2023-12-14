import MinimalRepository  from "./types"; 

// Sorting by most recent for now
export function sort(data: Array<MinimalRepository>): Array<MinimalRepository>{
    if (data.length < 2){
        return data;
    }

    data = data.sort((a, b) => {
        return get_last_update_time(b) - get_last_update_time(a);
        // return b.size - a.size;
    });

    return data;
}


export function filter(data: Array<MinimalRepository>): Array<MinimalRepository>{
    return data.filter((repo, index) => {
            // False to remove the element
            console.log(`${repo.owner.login} | ${repo.name}`);
            if (repo.fork) {
                console.log("Skipped, fork");
                return false;
            }
            if (repo.description == null) {
                console.log("Skipped, null")
                return false;
            }
            if (repo.name.toLowerCase() == repo.owner.login.toLowerCase()) {
                console.log("Skipped, profile repo");
                return false;
            }

            if (/\w+\.\w+/.test(repo.name)) { // word dot word 
                console.log("Skipped, config files");
                return false;
            }

            return true;
        });
}

export function get_last_update_time(repo: MinimalRepository): Date{
    return new Date(Math.max.apply(
        null,
         [
            new Date(repo.updated_at),
            new Date(repo.pushed_at)
        ]
    ));
}