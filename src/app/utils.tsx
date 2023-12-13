
export default function capitalizeFirstLetter(input: String): String{

    if (input.length < 1){
        return input;
    }

    return input.charAt(0).toUpperCase() + input.slice(1);
}