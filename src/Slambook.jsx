import './Slambook.css'
function Slambook() {
    let name = "sindhu";
    return(
        <div className="page-background">
        <div className="slambook-container">
            <form type>
                <fieldset className="slam_fieldset">
                <legend>SLAMBOOK</legend>
                <label for ="form">Name : </label>
                <input type="text" name ="name" placeholder ="Name"></input><br></br><br></br>
                <label for ="form">Nickname : </label>
                <input type="text" name ="name" placeholder ="Nickname"></input><br></br><br></br>
                <label>DOB : </label>
                <input type="date" name="dob" ></input><br></br><br></br>
                <label>Memories : </label><br></br>
                <textarea></textarea><br></br><br></br>
                <div className="slam_gender">
                <label for="gender">Gender:</label>
                <input type="radio" id="male" name="gender" value="male" required/>
                <label for="male">Male:</label>
                <input type="radio" id="female" name="gender" value="female" required/>
                <label for="female">Female</label><br></br><br></br>
                <label for="address">Address:</label><br></br>
                <textarea id="Address" name="Address" required/><br></br><br></br>
                <div className="slam_actor">
                <label for="actor">Favourite Actor:</label>
                <input type="checkbox" id="actor" name="Ajith" value="Ajith" required/>
                <label for="Ajith">Ajith</label>
                <input type="checkbox" id="actor" name="Vijay" value="Vijay" required/>
                <label for="Vijay">Vijay</label>
                <input type="checkbox" id="actor" name="Surya" value="Surya" required/>
                <label for="Surya">Surya</label>
                <input type="checkbox" id="actor" name="Karthi" value="Karthi" required/>
                <label for="Karthi">Karthi</label>
                </div ><br></br>
                <label>College : </label>
                <select name="college">
                    <option value ="kec">KEC</option>
                    <option value ="ksa">KSA</option>
                    <option value ="kpc">KPC</option>
                </select><br></br><br></br>
                <input type="submit" name = "Submit" value="Submit"></input>
                </div>
                
                </fieldset>
            </form>
        </div>
        </div>
    )
}

export default Slambook;