// __ -> Component / View

export default function CreateProfile() {
    return (
        <>
            <h1>Create Profile</h1>
            <p>Please enter your username</p>

            <label htmlFor="userId">User ID: </label>
            <input id="userId" />

            <p>Please enter your password</p>

            <label htmlFor="password">Password: </label>
            <input id="password" />

            <p>Write your 5 favorite songs:</p>
            <label htmlFor="song1">Song 1: </label>
            <input id="song1" />
            <br></br>
            <br></br>
            <label htmlFor="song2">Song 2: </label>
            <input id="song2" />
            <br></br>
            <br></br>
            <label htmlFor="song3">Song 3: </label>
            <input id="song3" />
            <br></br>
            <br></br>
            <label htmlFor="song4">Song 4: </label>
            <input id="song4" />
            <br></br>
            <br></br>
            <label htmlFor="song5">Song 5: </label>
            <input id="song5" />

            <p>Write your 5 favorite artists:</p>
            
            <label htmlFor="artist1">Artist 1: </label>
            <input id="artist1" />
            <br></br>
            <br></br>

            <label htmlFor="artist2">Artist 2: </label>
            <input id="artist2" />
            <br></br>
            <br></br>

            <label htmlFor="artist3">Artist 3: </label>
            <input id="artist3" />
            <br></br>
            <br></br>

            <label htmlFor="artist4">Artist 4: </label>
            <input id="artist4" />
            <br></br>
            <br></br>

            <label htmlFor="artist5">Artist 5: </label>
            <input id="artist5" />
        </>
    );
}