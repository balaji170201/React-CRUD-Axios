import React, { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Edituser({users,setUsers}) {

    const navigate = useNavigate();
    const {id} = useParams();

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [street, setStreet] = useState('');
    const [suite, setSuite] = useState('');
    const [city, setCity] = useState('');
    const [zipcode, setZipcode] = useState(null);
    const [phone, setPhone] = useState(null);
    const [website, setWebsite] = useState('');
    const [company, setCompany] = useState('');
    const [companyInfo, setCompanyInfo] = useState('');
    
    useEffect(() => {
        const currentUser = users.find((user) => user.id === parseInt(id));
        if (currentUser) {
          setName(currentUser.name);
          setUsername(currentUser.username);
          setEmail(currentUser.email);
          setStreet(currentUser.address.street);
          setSuite(currentUser.address.suite);
          setCity(currentUser.address.city);
          setZipcode(currentUser.address.zipcode !== null ? parseInt(currentUser.address.zipcode) : null);
          setPhone(currentUser.phone !== null ? parseInt(currentUser.phone) : null);
          setWebsite(currentUser.website);
          setCompany(currentUser.company.name);
          setCompanyInfo(currentUser.company.bs);
        }
    }, [id, users]);
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        const userIndex = users.findIndex((user) => user.id === parseInt(id));
    
        const updatedUser = {
            id: parseInt(id),
            name:name,
            username:username,
            email:email,
            address: {
                street:street,
                suite:suite,
                city:city,
                zipcode:zipcode,
            },
            phone:phone,
            website:website,
            company: {
                name: company,
                bs: companyInfo,
            },
        };
    
        // Create a new array with the updated user
        const updatedUsers = [...users];
        updatedUsers[userIndex] = updatedUser;
    
        // Updating the users state
        setUsers(updatedUsers);
        
        navigate('/');
      };
  
  return (
    <div className='form'> 
        <form onSubmit={handleSubmit}>
          <div style={{display:'flex',flexDirection:'row',gap:'40px'}}>
            <div class="mb-3">
              <label htmlFor="name" class="form-label">Name:</label>
              <input 
                type="text" 
                class="form-control" 
                id="name" 
                required
                value={name}
                onChange={(e) => setName(e.target.value)}  
              />
            </div>

            <div class="mb-3">
              <label htmlFor="username" class="form-label">Username:</label>
              <input 
                type="text" 
                class="form-control" 
                id="username" 
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}  
              />
            </div>
          </div>

          <div style={{display:'flex',flexDirection:'row',gap:'40px'}}>
            <div class="mb-3">
              <label htmlFor="email" class="form-label">Email:</label>
              <input 
                type="email" 
                class="form-control" 
                id="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}  
              />
            </div>

            <div class="mb-3">
              <label htmlFor="street" class="form-label">Street:</label>
              <input 
                type="text" 
                class="form-control" 
                id="street" 
                required
                value={street}
                onChange={(e) => setStreet(e.target.value)}  
              />
            </div>
          </div>

          <div style={{display:'flex',flexDirection:'row',gap:'40px'}}>
            <div class="mb-3">
              <label htmlFor="suite" class="form-label">Suite:</label>
              <input 
                type="text" 
                class="form-control" 
                id="suite" 
                required
                value={suite}
                onChange={(e) => setSuite(e.target.value)}  
              />
            </div>

            <div class="mb-3">
              <label htmlFor="city" class="form-label">City:</label>
              <input 
                type="text" 
                class="form-control" 
                id="city" 
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}  
              />
            </div>

            <div class="mb-3">
              <label htmlFor="zipcode" class="form-label">Zipcode:</label>
              <input 
                type="number" 
                class="form-control" 
                id="zipcode" 
                required
                value={zipcode}
                onChange={(e) => setZipcode(e.target.value)}  
              />
            </div>
          </div>
         
          <div style={{display:'flex',flexDirection:'row',gap:'40px'}}>
            <div class="mb-3">
              <label htmlFor="phone" class="form-label">Phone:</label>
              <input 
                type="number" 
                class="form-control" 
                id="phone" 
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}  
              />
            </div>

            <div class="mb-3">
              <label htmlFor="website" class="form-label">Website:</label>
              <input 
                type="text" 
                class="form-control" 
                id="website" 
                required
                value={website}
                onChange={(e) => setWebsite(e.target.value)}  
              />
            </div>
          </div>
          
          <div style={{display:'flex',flexDirection:'row',gap:'40px'}}>
            <div class="mb-3">
              <label htmlFor="company" class="form-label">Company:</label>
              <input 
                type="text" 
                class="form-control" 
                id="company" 
                required
                value={company}
                onChange={(e) => setCompany(e.target.value)}  
              />
            </div>

            <div class="mb-3">
              <label htmlFor="companyinfo" class="form-label">Company Info:</label>
              <input 
                type="text" 
                class="form-control" 
                id="companyinfo" 
                required
                value={companyInfo}
                onChange={(e) => setCompanyInfo(e.target.value)}  
              />
            </div>
          </div>

          <div style={{display:'flex',justifyContent:'center',marginBottom:'20px'}}>
            <button type="submit" class="btn btn-primary">Save Changes</button>
          </div>
        </form>
    </div>
  )
}

export default Edituser