import { FormData } from '@/components/contact';

export function capitalizeFirstLetter(input: String): String{

    if (input.length < 1){
        return input;
    }

    return input.charAt(0).toUpperCase() + input.slice(1);
}


export function sendEmail(data: FormData) {
  // TODO: send email
  console.log(data);
}