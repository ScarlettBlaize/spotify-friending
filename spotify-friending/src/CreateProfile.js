// __ -> Component / View
import './index.css';

export default function CreateProfile() {
    return (
        <>
            <div className="flex-container width-100 column">
                <h1>Create Profile</h1>

                <h4>Please enter your username</h4>

                <label htmlFor="userId">User ID: </label>
                <input id="userId" />

                <h4>Please enter your password</h4>

                <label htmlFor="password">Password: </label>
                <input id="password" />
            </div>

            <div className="flex-container row">
                <div className="mx-20">
                    <h5>Write your 5 favorite songs:</h5>
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
                </div>

                <div className="mx-20">
                    <h5>Write your 5 favorite artists:</h5>

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
                </div>
            </div>



        </>
    );
}