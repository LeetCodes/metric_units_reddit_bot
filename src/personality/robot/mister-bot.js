// Responds to "mister/mr bot"

module.exports = {
    "regex": /(?:mister|mr\.?) (?:ro)?bot|(?:good|bad) boy/i,
    "responses": [
        { "weight": 3, "response": "Actually, I prefer the female gender pronoun. Thanks." },
        "Actually, my gender identity is non-binary. Thanks."
    ]
};
