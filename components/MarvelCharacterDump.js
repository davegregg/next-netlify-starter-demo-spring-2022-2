import { useEffect, useState } from "react"

export default function MarvelCharacterDump () {
    const [character, setCharacter] = useState({})

    useEffect(() => {
        fetch("http://localhost:53498/marvel?searchTerm=spider&limit=100&offset=1")
            .then(response => response.json())
            .then(characters => characters[0])
            .then(selectedCharacter => setCharacter(selectedCharacter))
    }, [])

    return (
        <h2 className="marvel-character">{character.name}</h2>
    )
}
