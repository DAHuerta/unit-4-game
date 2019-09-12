var attackerName
var defenderName

var attackerHP
var attackerAP
var attackerCAP
var defenderHP
var defenderAP
var defenderCAP
var myChar = ""
var defChar = ""

function reset() {

    $("#characterRow").show()
    
    $("#restartButton").hide()

    $("#attackButton").show()

    characters.Batman.hitPoints = 180;
    characters.Robin.hitPoints = 100;
    characters.Joker.hitPoints = 160;
    characters.Scarecrow.hitPoints = 120;

    characters.Batman.attackPoints = 18;
    characters.Robin.attackPoints = 10;
    characters.Joker.attackPoints = 14;
    characters.Scarecrow.attackPoints = 12;

    $("#bat").appendTo("#characterRow")
    $("#rob").appendTo("#characterRow")
    $("#joke").appendTo("#characterRow")
    $("#scare").appendTo("#characterRow")

    $(".youAttacked").empty()
    $(".defendAttacked").empty()
    $(".youDefeat").empty()
    $(".youWin").empty()
    
}

var characters = {

    Batman: {
        hitPoints: 180,
        attackPoints: 18,
        counterAttackPoints: 20,
        characterName: "Batman",
        image: "assets/images/batman.jpeg",
    },

    Robin: {
        hitPoints: 100,
        attackPoints: 10,
        counterAttackPoints: 16,
        characterName: "Robin",
        image: "assets/images/robin.jpeg",
    },

    Joker: {
        hitPoints: 160,
        attackPoints: 14,
        counterAttackPoints: 25,
        characterName: "Joker",
        image: "assets/images/joker.jpeg",
    },

    Scarecrow: {
        hitPoints: 120,
        attackPoints: 12,
        counterAttackPoints: 18,
        characterName: "Robin",
        image: "assets/images/robin.jpeg",
    },
}


