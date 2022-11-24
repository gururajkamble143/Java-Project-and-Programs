function makeCoffee(suger , milk)
{
    var instructions = "Boil Water,";
    instructions += " pour into cup,";
    instructions += " add coffee granules,";
    instructions += " add " + suger + "spoons of suger";
    instructions += " add " + milk + "%milk.";
    return instructions;
}

console.log(makeCoffee( 2 , 20 ));