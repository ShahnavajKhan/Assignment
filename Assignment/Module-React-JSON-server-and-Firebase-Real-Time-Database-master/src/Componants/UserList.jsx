import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getUsers, deleteUser, addUser } from '../Services/Api';

function UserList() {
    const [users, setUsers] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState({ firstName: '', lastName: '', email: '' });
    const navigate = useNavigate();

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await getUsers();
            setUsers(response.data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteUser(id);
            setUsers(users.filter(user => user.id !== id));
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    const openModal = () => setIsOpen(true);
    const closeModal = () => {
        setIsOpen(false);
        setUser({ firstName: '', lastName: '', email: '' });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addUser(user);
            fetchUsers();
            closeModal();
        } catch (error) {
            console.error("Error adding user:", error);
        }
    };
    const handleView = (id) => {
        navigate(`/user/addUser/${id}`);
    };

    return (
        <div>
            <div style={{ backgroundColor: '#000080' }}>
                <h1 style={{ textAlign: 'center', color: 'white' }}>React CRUD Operation</h1>
                <h1 style={{ textAlign: 'center', color: 'yellow' }}><span>&#123;JSON Server&#125;</span></h1>

                <button onClick={openModal} type="button" className="btn btn-success">
                    Add User
                </button>
                <div style={{
                    backgroundColor: '#add8e6', color: '#0000ff', fontSize: '24px', fontWeight: 'bold', fontFamily: 'Arial, sans-serif', padding: '10px 20px',
                    transform: 'rotate(-25deg)', display: 'inline-block', borderRadius: '8px', position: 'relative', top: '-10px', left: '150vh',
                }}>Router</div>
                <div style={{
                    color: 'yellow', fontSize: '48px', fontWeight: 'bold', fontFamily: 'Arial, sans-serif', padding: '10px 20px',
                    transform: 'rotate(-25deg)', display: 'inline-block', borderRadius: '8px', position: 'relative', top: '200px', right: '45vh',
                }}>API</div>
                <div style={{
                    color: '#add8e6', fontSize: '48px', fontWeight: 'bold', fontFamily: 'Arial, sans-serif', padding: '10px 20px',
                    transform: 'rotate(-25deg)', display: 'inline-block', borderRadius: '8px', position: 'relative', top: '250px', right: '45vh',
                }}>Axios</div>

            </div>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">User First Name</th>
                        <th scope="col">User Last Name</th>
                        <th scope="col">User Email</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td><Link type="button" className="btn btn-primary" to={`/edituser/${user.id}`} style={{ margin: '2px' }}>Edit</Link>
                                <button onClick={() => handleDelete(user.id)} type="button" className="btn btn-danger" style={{ margin: '2px' }}>Delete</button>
                                <button
                                    onClick={() => navigate(`/user/view/${user.id}`)}
                                    type="button"
                                    className="btn btn-primary"
                                    style={{ margin: '2px' }}
                                >
                                    View
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {isOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Add User</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={user.firstName}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={user.lastName}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={user.email}
                                onChange={handleChange}
                                required
                            />
                            <button type="submit">Add User</button>
                            <button type="button" onClick={closeModal}>Cancel</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default UserList;
