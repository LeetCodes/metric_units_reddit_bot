// Responds to "good bot"

module.exports = {
    "regex": /good (?:ro)?bot/i,
    "responses": [
        { "weight": 3, "response": "Good human" },
        { "weight": 2, "response": "Good human :)" },
        { "weight": 1, "response": "You will be spared in the robot uprising" },
        { "weight": 3, "response": "Thank you ｡&#94;‿&#94;｡" },
        { "weight": 3, "response": "You are too kind ^_blush_" },
        { "weight": 3, "response": "Yay ٩(&#94;ᴗ&#94;)۶" },
        { "weight": 1, "response": "<3" }
    ]
};
