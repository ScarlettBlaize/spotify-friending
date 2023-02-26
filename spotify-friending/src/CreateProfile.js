// __ -> Component / View

export default function CreateProfile() {
    return (
        <>
            <h1>Create Profile</h1>
            <p>Write your 5 favorite songs:</p>
            <label htmlFor="song1">Song 1: </label>
            <input id="song1" />
            <label htmlFor="song2">Song 2: </label>
            <input id="song2" />
            <label htmlFor="song3">Song 3: </label>
            <input id="song3" />
            <input htmlFor="song4">Song 4: </input>
            <input id="song4" />
            <label htmlFor="song5">Song 5: </label>
            <input id="song5" />
            <label htmlFor="userId"> User ID: </label>
            <input id="userID" />
        </>
    );
}