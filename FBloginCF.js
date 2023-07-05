import { useState } from "react";
import './FB.css';

    var FBloginCF=()=>
    {
        const[fname,setFname]=useState(undefined)
        const[lname,setLname]=useState(undefined)
        const[mob,setMob]=useState(undefined)
        const[pass,setPass]=useState(undefined)
        const[date,setDate]=useState(undefined)
        const[month,setMonth]=useState(undefined)
        const[year,setYear]=useState(undefined)
        const[g,setG]=useState(undefined)
        const[res,setRes]=useState(undefined)
        const[show,setShow]=useState("none")
        var login=(e)=>
        {
            setRes(`First name:-${fname} Last name:-${lname} Mobile number or email:-${mob} Password:-${pass} Date of birth:-${date} ${month}${year} Gender:-${g}`)
           
            e.preventDefault()
        }
        var other=()=>
        {
            setShow("block")
        }
        var malefemale=(e)=>
        {
            if(other)
            {
                setShow("none")
            }
        }
        return(<div>
            <div className="container">
            <div className="img">
                <img src="fb.png"alt="logo"width='350px'/>
                <div className="create">
                <h3>Create a new account</h3>
                <h5>It's quick and easy.</h5>
            </div>
            </div>

            <form onSubmit={login}>

            <input type="text"placeholder="First name"className="name"onChange={(e)=>setFname(e.target.value)}/>


            <input type="text"placeholder="Surname"className="name"onChange={(e)=>setLname(e.target.value)}/><br/>


            <input type="text"placeholder="Mobile number or email address"className="ph"onChange={(e)=>setMob(e.target.value)}/><br/>


            <input type="password"placeholder="New password"className="ph"onChange={(e)=>setPass(e.target.value)}/><br/>

            <div className ="date">Date of birth</div>
            <select className="date1" onChange={(e)=>setDate(e.target.value)}>
                <option value="">Select Date</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
            </select>


            <select className="date1" onChange={(e)=>setMonth(e.target.value)}>
                <option value="">Select Month</option>
                <option value="Jan">Jan</option>
                <option value="Feb">Feb</option>
                <option value="Mar">Mar</option>
                <option value="Apr">Apr</option>
                <option value="May">May</option>
                <option value="Jun">Jun</option>
                <option value="Jul">Jul</option>
                <option value="Aug">Aug</option>
                <option value="Sep">Sep</option>
                <option value="Oct">Oct</option>
                <option value="Nov">Nov</option>
                <option value="Dec">Dec</option>
            </select>


            <select className="date1" onChange={(e)=>setYear(e.target.value)}>
                <option value="">Select Year</option>
                <option value="2004">2004</option>
                <option value="2003">2003</option>
                <option value="2002">2002</option>
                <option value="2001">2001</option>
                <option value="2000">2000</option>
                <option value="1999">1999</option>
                <option value="1998">1998</option>
                <option value="1997">1997</option>
                <option value="1996">1996</option>
                <option value="1995">1995</option>
                <option value="1994">1994</option>
                <option value="1993">1993</option>
                
            </select><br/>

            <div className ="date">Gender</div>
            Female<input type="radio"name="gender"value="Female" onChange={(e)=>setG(e.target.value)}onClick={malefemale}/>


            Male<input type="radio"name="gender"value="Male" onChange={(e)=>setG(e.target.value)}onClick={malefemale}/>


            Custom<input type="radio"name="gender"value="Custom" onChange={other}/>



            <div style={{display:show}}>

            <select className="ph"onChange={(e)=>setG(e.target.value)}>
                <option value="Select your pronoun">Select your pronoun</option>
                <option value="She:Wish her a Happy Birthday!">She:Wish her a Happy Birthday!</option>
                <option value="He:Wish him a Happy Birthday!">He:Wish him a Happy Birthday!</option>
                <option value="Them:Wish them a Happy Birthday">Them:Wish them a Happy Birthday</option>
                </select><br/>
                <h6>Your pronoun is visible to everyone.</h6>
                <input type="text"placeholder="Gender(optional)"className="ph"/>
                </div>
                <div className="text">
                    <p>People who use our service may have uploaded your contact information to Facebook. Learn more.
                    By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time.
                    </p>
                </div>
            <center><input type="submit"value="Sign Up"id="btn"/><br/>
            <label>Already have an account?</label></center>
</form>
</div>
<div className="container">{res}</div>
        </div>)
    }
    export default FBloginCF;
