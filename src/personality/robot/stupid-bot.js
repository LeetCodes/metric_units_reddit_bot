// Responds to "stupid/dumb/useless bot/fuck off"

module.exports = {
    "regex": /(stupid|dumb|useless) (?:ro)?bot|fuck off/i,
    "responses": [
        { "weight": 3, "response": "To be fair, I _am_ still in beta ¯&#92;&#95;(ツ)&#95;/¯" },
        { "weight": 1, "response": "Sorry, I was just trying to help (◕‸ ◕✿)" },
        { "weight": 1, "response": "Bots have feelings too, you know (ಥ﹏ಥ)" }
    ]
};
