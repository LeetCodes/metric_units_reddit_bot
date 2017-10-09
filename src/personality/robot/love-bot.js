// Responds to "love you/love ya/love u/love this"

module.exports = {
    "regex": /love (?:you|ya|u)|love this (?:ro)?bot/i,
    "responses": [
        { "weight": 10, "response": "What is love?" },
        { "weight": 3, "response": "Robots do not feel love" },
        { "weight": 2, "response": "(≧◡≦) ♡" }
    ]
};
