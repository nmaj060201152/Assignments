var age:number = 4;
if (age == null){
    console.log("You entered nothing..., plz enter valid age\n Try again")
   }
else if(age <= 0){
        console.log("this is not a valid age, plz enter valid value\n try again")}

        else if (age <2){
            console.log("That person is a baby")
        }

        else if (age =>2 && age <4){
                console.log("person is toddler")
            }

            else if (age =>4 && age <13){
                    console.log("person is a kid")
                }

                else if (age =>13 && age <20){
                        console.log("person is teenager")
                    }

                    else if (age =>20 && age <65){
                            console.log("person is adult")
                        }
                        else if (age =>65){
                                console.log("person is elder")
                            }
