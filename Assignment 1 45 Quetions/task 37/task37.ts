let size:string = "";
let message:string = "";
    function shirtSize(size: string, message: string): void {
        if (size=="large"){message="I love typescript."}
        else if (size=="any"){message="this is a shirt of size"}
        else{
            message="Size of your shirt is "
        }
        console.log(message+" "+size);
    }
shirtSize("large",message);
shirtSize("medium",message);
shirtSize("any",message);